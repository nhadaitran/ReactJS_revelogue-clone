import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/profileHeader.module.scss";

const ProfileHeader = () => {
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
export default React.memo(ProfileHeader);
