import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

function App() {
  const [toggle, setToggle] = useState(false);

  const cardRef = useRef(null);

  const changeState = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    toggle
      ? gsap.to(cardRef.current, { scale: 1.5, rotate: 360, duration: 1.2 })
      : gsap.to(cardRef.current, { scale: 1, rotate: 0, duration: 1.2 });
  }, [toggle]);

  return (
    <div className="App">
      <div className="card" onClick={changeState} ref={cardRef}>
        
      </div>
    </div>
  );
}

export default App;
