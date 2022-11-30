import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/breadcrumb.module.scss";
import { StoreContext } from "../utils/store";
import slugify from "slugify";
const Breadcrumbs = () => {
  const value = React.useContext(StoreContext);
  const breadcrumb = value.breadcrumb[0];
  console.log(breadcrumb);
  return (
    <nav className={styles.container}>
      <ol>
        <li>
          <NavLink to="/"> Trang chủ </NavLink>
        </li>
        {breadcrumb.map(function (data, i) {
          var href = "/danh-muc/";
          var extraLink = "";
          if (i !== 0) {
            extraLink =
              slugify(breadcrumb[i - 1], { lower: true, strict: true }) + "/";
          }
          return (
            <li key={i}>
              <NavLink
                to={`${href + extraLink}${slugify(breadcrumb[i], {
                  lower: true,
                  strict: true,
                })}`}
              >
                {" "}
                {data}{" "}
              </NavLink>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
export default Breadcrumbs;
