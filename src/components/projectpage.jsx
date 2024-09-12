import classes from "./projectpage.module.css";
import { forwardRef } from "react";
import Toogle from "../layouts/toogle";

const ProjectPage = forwardRef(function ProjectPage(
  { project, handletask },
  ref
) {
  return (
    <div className={classes.project__con}>
      <div className={`${classes.project_container} ${classes.hidescrollbar}`}>
        <div className={classes.title_container}>
          <h1>{project.title}</h1>
          <h2>{project.subtitle}</h2>
        </div>
        <p className={classes.desc}>{project.description}</p>
        <p className={classes.date}>Due Date:{project.duedate}</p>
      </div>
      <div className={classes.taskcontainer}>
        <div className={`${classes.addtask}`}>
          <form onSubmit={handletask.bind(null, project.id)}>
            <h1 htmlFor="task">Tasks</h1>
            <div className={classes.input__container}>
              <textarea name="task" type="text" rows="1" ref={ref} />
              <button type="submit">
                <label>AddTask</label>
              </button>
            </div>
          </form>
          <ol className={classes.hidescrollbar}>
            {project.tasks.map((ele, index) => {
              return (
                <li key={index}>
                  <p>{ele}</p>
                  <div>
                    <Toogle />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
});

export default ProjectPage;
