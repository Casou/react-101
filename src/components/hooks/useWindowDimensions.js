import { useState, useEffect } from "react";

const useWindowsWidth = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const updateScreenSize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return { height, width };
};

export default useWindowsWidth;