import TagManager from "react-gtm-module";

export const sendEvent = () => {
  TagManager.dataLayer({
    dataLayer: {
      event: "button_click",
      category: "User Interaction",
      action: "Clicked Signup Button",
      label: "Signup Page"
    }
  });
  console.log("function is called")
};