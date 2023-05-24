import { useState, useEffect } from "react";

const HeaderScroll = () => {
  const [activeWord, setActiveWord] = useState(0);
  const titleText = ["BUZTEK", "DESIGN", "BUILD", "SECURE"];

  const MINUTE_SEC = 1500;
  // console.log(text);
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeWord <= 2) {
        setActiveWord(activeWord + 1);
      } else {
        setActiveWord(0);
      }
    }, MINUTE_SEC);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [activeWord]);

  return (
    <div>
      <h1 className="splash-heading">{titleText[activeWord]}</h1>
    </div>
  );
};

export default HeaderScroll;
