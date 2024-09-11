import classes from "./createproject.module.css";
import { useRef } from "react";

export default function CreateProject(props) {
  const title = useRef();
  const subtitle = useRef();
  const description = useRef();
  const duedate = useRef();

  function handleformdata(e) {
    e.preventDefault();
    const newproject = {
      title: title.current.value,
      subtitle: subtitle.current.value,
      description: description.current.value,
      duedate: duedate.current.value,
      tasks: [],
    };
    props.add(newproject);
  }

  return (
    <>
      <form className={classes.form__create} onSubmit={handleformdata}>
        <div>
          <p htmlFor="title" className={classes.title}>
            Project Title
          </p>
          <input type="text" name="title" ref={title} required />
        </div>
        <div>
          <p htmlFor="subtitile">Project Subtitle</p>
          <input type="text" name="subtitle" ref={subtitle} />
        </div>
        <div>
          <p htmlFor="description">Project Description</p>
          <textarea rows="7" name="description" ref={description} required />
        </div>
        <div>
          <p htmlFor="date">Project Deadline</p>
          <input
            type="date"
            name="date"
            style={{ width: "250px" }}
            ref={duedate}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className={`${classes.button__submit} ${classes.button}`}
          >
            <label>Confirm</label>
          </button>
          <button className={classes.button} onClick={props.handleform}>
            <label>Cancel</label>
          </button>
        </div>
      </form>
    </>
  );
}
