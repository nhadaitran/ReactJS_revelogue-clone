import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/blogWidgetContent.module.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import moment from "moment";
const BlogWidgetContent = ({ setBlog, data }) => {
  return (
    <div className={styles.widget}>
      <div className={styles.widget__group}>
        {data.map((value, i) => (
          <div className={styles.widget__group__item} key={i}>
            <div
              className={styles.widget__group__item__thumbnail}
              style={{ backgroundImage: `url(${value.image_url}` }}
              onClick={() => {
                setBlog(value);
              }}
            />
            <div className={styles.widget__group__item__content}>
              <NavLink
                className={styles.widget__group__item__content__title}
                to={`/bai-viet/${value.slug}`}
              >
                {value.title}
              </NavLink>
              <p className={styles.widget__group__item__content__meta}>
                {value.writer.fullname}, {moment(value.updated_at).fromNow()} |{" "}
                <AccessTimeIcon /> 13 min read
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogWidgetContent;
