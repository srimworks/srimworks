export async function onRequestPost(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const data = await request.json();
    const {
      firstname,
      lastname,
      email,
      mobile,
      companyName,
      website,
      message,
      turnstileToken
    } = data;

    // 1. Basic validation & sanitization
    if (!firstname || !lastname || !email || !message) {
      return Response.json(
        { success: false, error: 'Missing required fields (First name, Last name, Email, Message).' },
        { status: 400, headers: corsHeaders }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400, headers: corsHeaders }
      );
    }

    // 2. Cloudflare Turnstile Verification
    const clientIp = request.headers.get('CF-Connecting-IP') || '';
    const userAgent = request.headers.get('User-Agent') || '';
    const secretKey = env.TURNSTILE_SECRET_KEY || '0x4AAAAAAEVQMooahds5RYjn10KE4iqY_T0';

    if (turnstileToken) {
      const turnstileFormData = new FormData();
      turnstileFormData.append('secret', secretKey);
      turnstileFormData.append('response', turnstileToken);
      if (clientIp) turnstileFormData.append('remoteip', clientIp);

      const turnstileResp = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: turnstileFormData
      });
      const turnstileOutcome = await turnstileResp.json();

      if (!turnstileOutcome.success) {
        console.warn('Turnstile verification failed:', turnstileOutcome);
        return Response.json(
          { success: false, error: 'Bot verification failed. Please try again.' },
          { status: 403, headers: corsHeaders }
        );
      }
    } else {
      return Response.json(
        { success: false, error: 'Security verification is required.' },
        { status: 400, headers: corsHeaders }
      );
    }

    // 3. PERSISTENCE TO D1 (Single Source of Truth)
    if (!env.DB) {
      throw new Error('Cloudflare D1 Database binding "DB" is not available.');
    }

    const insertResult = await env.DB.prepare(`
      INSERT INTO contact_submissions (firstname, lastname, email, mobile, company_name, website, message, ip, user_agent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      firstname.trim().substring(0, 100),
      lastname.trim().substring(0, 100),
      email.trim().toLowerCase().substring(0, 150),
      (mobile || '').trim().substring(0, 30),
      (companyName || '').trim().substring(0, 150),
      (website || '').trim().substring(0, 200),
      message.trim().substring(0, 5000),
      clientIp,
      userAgent.substring(0, 250)
    ).run();

    const submissionId = insertResult.meta?.last_row_id || 1;

    // 4. DECOUPLED NOTIFICATION LAYER
    try {
      console.log(`[D1 PERSISTED] Inbound Lead #${submissionId} safely stored for ${email}`);
    } catch (notifyErr) {
      console.error('Non-fatal notification error:', notifyErr);
    }

    return Response.json(
      {
        success: true,
        message: 'Thank you! Your message has been securely received by SRIM WORKS. We will respond within 24 hours.',
        leadId: submissionId
      },
      { status: 200, headers: corsHeaders }
    );

  } catch (err) {
    console.error('Contact API Error:', err);
    return Response.json(
      { success: false, error: 'An unexpected error occurred while saving your inquiry. Please try again.' },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    }
  });
}
