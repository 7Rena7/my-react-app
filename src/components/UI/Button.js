import "./Button.css";

export default function Button(props) {
  const classes = " button " + props.className;
  return <div className={classes}>{props.children}</div>;
}
