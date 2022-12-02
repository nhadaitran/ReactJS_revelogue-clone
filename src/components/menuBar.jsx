import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./styles/menuBar.module.scss";

const MenuBar = () => {
  let location = useLocation();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (location.pathname.search("article") !== -1) {
      setData([
        { link: "/admin/article/upload", title: "Thêm bài viết" },
        { link: "/admin/article/upload", title: "Cập nhật bài viết" },
        { link: "/admin/article/status", title: "Duyệt bài viết" },
      ]);
    } else {
      setData([
        { link: "/admin/category/upload", title: "Thêm danh mục" },
        { link: "/admin/category/upload", title: "Cập nhật danh mục" },
        { link: "/admin/category/status", title: "Duyệt danh mục" },
      ]);
    }
  }, [location.pathname]);
  return (
    <div className={styles.container}>
      <div className={styles.container__group}>
        {data &&
          data.map((item, i) => (
            <NavLink
              key={i}
              className={({ isActive }) =>
                isActive
                  ? styles[`container__group__item--active`]
                  : styles.container__group__item
              }
              to={`${item.link}`}
            >
              {item.title}
            </NavLink>
          ))}
      </div>
    </div>
  );
};
export default MenuBar;
