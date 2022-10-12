import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <Button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

export default Button;
