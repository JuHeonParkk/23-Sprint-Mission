import { useState, useEffect } from "react";

function useDevice() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (width < 768) return "mobile";
  else if (width < 1200) return "tablet";
  else return "desktop";
}

export default useDevice;
