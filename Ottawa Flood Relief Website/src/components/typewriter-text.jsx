import { useState, useEffect } from "react";

export function TypeWriter({ text, speed = 100 }){
  const [displayText, setDisplayText] = useState("");

  useEffect(()=> {
    let index = 0;
    
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, index + 1));
      index++;

      if (index === text.length){
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);
  
  
  return <h1 className="typewriter"> {displayText} </h1>;
}