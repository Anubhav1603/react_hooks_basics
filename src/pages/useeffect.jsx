import { useEffect, useState } from "react";

function UseEffect() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleReize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleReize);
    return () => {
      window.removeEventListener("resize", handleReize); //return is always ran first, its a cleanup
    };
  }, []);
  return (
    <>
      <div>{windowWidth}</div>
    </>
  );
}

export default UseEffect;
