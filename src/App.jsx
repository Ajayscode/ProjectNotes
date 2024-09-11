import Page from "./components/Page";
import SideBar from "./components/sideBar";
import classes from "./App.module.css";
import { useState, useRef } from "react";
import Validation from "./components/validation";
import CreateProject from "./components/createProject";
import EmptyPage from "./components/emptypage";
import ProjectPage from "./components/projectpage";

function App() {
  const [renderform, setformstate] = useState(false);
  const [projects, setprojects] = useState([]);
  const [validation, setvalidation] = useState({ state: false, value: "" });
  const [selected, setselected] = useState(null);
  const today = new Date();
  const textRef = useRef();

  function handletask(id, e) {
    e.preventDefault();
    const taskText = textRef.current.value;

    if (taskText.trim() === "") return;

    setprojects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.id === id) {
          return {
            ...project,
            tasks: [...project.tasks, taskText],
          };
        }
        return project;
      });
    });

    textRef.current.value = "";
  }
  function getformstate(e) {
    if (e.target.textContent.toLowerCase() === "cancel") {
      setformstate(false);
    } else {
      setformstate(true);
      setselected(null);
    }
  }

  function handlevalidation() {
    setvalidation({ state: false, value: "" });
  }
  function addtoprojects(project) {
    setprojects((prev) => {
      const diffproj = prev.some((ele) => {
        return ele.title === project.title;
      });
      const selecteddate = new Date(project.duedate);
      if (selecteddate <= today) {
        setvalidation({
          state: true,
          value: "Entered Date should be greater than current date",
        });
        return prev;
      }
      if (prev.length === 0 || !diffproj) {
        console.log(project.title);

        return [...prev, { ...project, id: prev.length + 1, tasks: [] }];
      } else {
        setvalidation({ state: true, value: "Duplicate Title" });
        return prev;
      }
    });
  }

  function handleselect(ele) {
    console.log(ele);
    setselected(ele);
  }
  return (
    <div className={classes.main_container}>
      {validation.state && (
        <Validation
          msg={validation.value}
          handlevalidation={handlevalidation}
        />
      )}
      <SideBar
        handleform={getformstate}
        addproject={projects}
        handleselect={handleselect}
      />
      <Page>
        {selected !== null ? (
          <ProjectPage
            project={selected}
            ref={textRef}
            handletask={handletask}
          />
        ) : !renderform ? (
          <EmptyPage handleform={getformstate} />
        ) : (
          <CreateProject handleform={getformstate} add={addtoprojects} />
        )}
      </Page>
    </div>
  );
}

export default App;
