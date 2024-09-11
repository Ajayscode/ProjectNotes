import classes from "./validation.module.css";
import { createPortal } from "react-dom";

export default function Validation({ msg, handlevalidation }) {
  return createPortal(
    <div className={classes.holder}>
      <div className={classes.validate}></div>
      <div className={classes.msg__container}>
        <p>{msg}</p>
        <button onClick={handlevalidation}>
          <label>close</label>
        </button>
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
}
