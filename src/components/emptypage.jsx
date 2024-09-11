import logo from "./../assets/no-projects.png";
import classes from "./page.module.css";

export default function EmptyPage({ handleform }) {
  return (
    <>
      <img src={logo} alt="test" />
      <header>
        <h1>No Project Selected</h1>
      </header>
      <p>Select a Project or get Started with a new one</p>
      <button className={classes.button__new} onClick={handleform}>
        Create new project
      </button>
    </>
  );
}
