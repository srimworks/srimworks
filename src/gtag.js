export const sendEvent = (eventName = "form_submission", params = {}) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      category: "User Interaction",
      action: "Submitted Contact Form",
      ...params
    });
  }
};