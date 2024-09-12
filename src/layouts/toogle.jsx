import { useRef, useState } from "react";
import classes from "./toogle.module.css";

export default function Toogle() {
  const toogleRef = useRef();
  const [val, setval] = useState(false);
  function handleBox() {
    val
      ? (toogleRef.current.style = "justify-content: flex-start;")
      : (toogleRef.current.style =
          "justify-content: flex-end; background-color: rgb(115, 182, 118);");
    setval((prev) => !prev);
  }

  return (
    <div className={classes.toogle}>
      <div ref={toogleRef}>
        <div className={classes.item}></div>
      </div>
      <button onClick={handleBox}></button>
    </div>
  );
}
