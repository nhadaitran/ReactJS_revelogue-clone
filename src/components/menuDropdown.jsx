import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/header.module.scss";
import { StoreContext } from "../utils/store";
const MenuDropdown = (props) => {
  const value = React.useContext(StoreContext);
  const alertLogout = value.alert[1];
  const handleLogout = () => {
    alertLogout(props);
  };
  return (
    <ul className={styles.dropdown}>
      {props.type === "subCategory" &&
        props.subItems.map(
          (data, i) =>
            data.status && (
              <li key={i}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? styles[`subCategory--active`]
                      : styles.subCategory
                  }
                  to={`/danh-muc/${props.item.slug}/${data.slug}`}
                >
                  {data.title}
                </NavLink>
              </li>
            )
        )}
      {props.type === "admin" && (
        <li onClick={() => handleLogout()}>Đăng xuất</li>
      )}
    </ul>
  );
};
export default React.memo(MenuDropdown);