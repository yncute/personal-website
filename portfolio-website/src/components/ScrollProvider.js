import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollRatio, setScrollRatio] = useState(0);

  //calculates horizontal scroll % for use in ProgressBar
  const calculateScrollPercent = useCallback(() => {
    const scrollLeft = window.scrollX;
    const docWidth = document.documentElement.scrollWidth;
    const winWidth = window.innerWidth;
    const totalScrollableWidth = docWidth - winWidth;
    setScrollRatio(scrollLeft / totalScrollableWidth);
  }, []);

  useEffect(() => {
    //handleScroll for optimization
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateScrollPercent();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [calculateScrollPercent]);

  return (
    <ScrollContext.Provider value={{ scrollRatio, setScrollRatio }}>
      {/* <p>{`Scroll Ratio: ${scrollRatio.toFixed(2)}`}</p> */}
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  return useContext(ScrollContext);
};
