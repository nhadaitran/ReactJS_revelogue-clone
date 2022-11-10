import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/menuBar.module.scss";

const MenuBar = (props) => {
    const {role} = props;
    return(
        <div className={styles.container}>
            <div className={styles.container__group}>
            <NavLink
                    className={({ isActive }) =>
                      isActive ? styles[`container__group__item--active`] : styles.container__group__item
                    }
                    to="/admin/upload"
                  >
                    Thêm bài viết
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles[`container__group__item--active`] : styles.container__group__item
                    }
                    to="/admin/upload"
                  >
                    Cập nhật bài viết
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles[`container__group__item--active`] : styles.container__group__item
                    }
                    to="/admin/upload"
                  >
                    Duyệt bài viết
                  </NavLink>
            </div>
        </div>
    )
};
export default MenuBar;
