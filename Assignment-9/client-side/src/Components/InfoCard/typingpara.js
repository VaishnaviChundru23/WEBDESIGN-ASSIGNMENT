import { useState, useEffect } from "react";

function TypingParagraph({ text }) {
  const [displayText, setDisplayText] = useState("");
  const typingSpeed = 25; // Adjust typing speed as desired

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentText += text[currentIndex];
      currentIndex++;
      setDisplayText(currentText);
      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [text]);

  return <p>{displayText}</p>;
}

export default TypingParagraph;