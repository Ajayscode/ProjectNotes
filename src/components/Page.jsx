import classes from "./page.module.css";

export default function Page({ children }) {
  return <div className={classes.content}>{children}</div>;
}
