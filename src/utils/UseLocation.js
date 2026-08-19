import { useEffect } from "react";
const useLocation = () => ({ pathname: typeof window !== "undefined" ? window.location.pathname : "/" });

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever the location changes
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;