import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/profileHeader.module.scss";

const ProfileHeader = () => {
  const user = useSelector((state) => state.user.info);
  return (
    <div className={styles.container}>
      <div className={styles.container__group}>
        <div
          className={styles.container__group__avatar}
          style={{ backgroundImage: `url(https://picsum.photos/100)` }}
        ></div>
        <div className={styles.container__group__name}>
          <p>{user.fullname}</p>
        </div>
        <div className={styles.container__group__intro}>
          <span>abcdef</span>
        </div>
      </div>
    </div>
  );
};
export default React.memo(ProfileHeader);
