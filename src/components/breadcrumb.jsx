import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/breadcrumb.module.scss";
import { StoreContext } from "../utils/store";
import slugify from "slugify";
const Breadcrumbs = () => {
  const value = React.useContext(StoreContext);
  const breadcrumb = value.breadcrumb[0];
  return (
    <nav className={styles.container}>
      <ol>
        <li><NavLink to="/"> Trang chủ </NavLink></li>
        {breadcrumb.map((data, i) => (
          <li key={i}><NavLink to={`/${slugify(data, { lower: true, strict: true })}`}> {data} </NavLink></li>
        ))}
      </ol>
    </nav>
  );
};
export default Breadcrumbs;
