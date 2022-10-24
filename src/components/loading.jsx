import * as React from "react";
import styles from "./styles/loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__bricks}></div>
    </div>
  );
};

export default Loading;