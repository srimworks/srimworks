
export function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  window.gtag('event', 'conversion', {
      'send_to': 'AW-16525387287/YboSCKnc2LYZEJfM9cc9',
      'event_callback': callback
  });
  return false;
}
