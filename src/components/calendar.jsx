import * as React from "react";
import styles from "./styles/header.module.scss";

const Calendar = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return (
    <div className={styles.calendar}>
      <div>
        <p>{date}</p>
      </div>
      <div>
        <p>TH{month}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};
export default React.memo(Calendar);
