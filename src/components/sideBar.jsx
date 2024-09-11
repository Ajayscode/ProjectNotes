import classes from "./sideBar.module.css";
import AddIcon from "@mui/icons-material/Add";

export default function SideBar({ handleform, addproject, handleselect }) {
  return (
    <ol className={classes.sidebar}>
      <li>
        <h1>Ajay's Project</h1>
      </li>

      <li>
        <button className={classes.add} onClick={handleform}>
          <label>
            <AddIcon /> Add New
          </label>
        </button>
      </li>

      <li className={classes.projects}>
        <ul>
          {addproject.map((ele, index) => (
            <li key={index}>
              <button onClick={handleselect.bind(null, ele)}>
                <label>{ele.title}</label>
              </button>
            </li>
          ))}
        </ul>
      </li>
    </ol>
  );
}
