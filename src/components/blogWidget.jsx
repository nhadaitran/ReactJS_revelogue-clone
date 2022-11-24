import * as React from "react";
import { NavLink } from "react-router-dom";
import Widget from "./blogWidgetContent";
import styles from "./styles/blogWidget.module.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import moment from "moment";
const BlogWidget = (props) => {
  const data = props.data;
  const [blog, setBlog] = React.useState(data[0]);
  console.log(blog)
  return (
    <>
      <div className={styles.tabs}>
        <p className={styles.tabs__title}>{blog.category.title}</p>
      </div>
      <div className={styles.container}>
        <div
          className={styles.container__thumbnail}
          style={{ backgroundImage: `url(${blog.image_url}` }}
        >
          <div className={styles.container__thumbnail__description}>
            <NavLink
              to={`/danh-muc/${blog.category.slug}`}
              className={styles.container__thumbnail__description__category}
            >
              {blog.category.title}
            </NavLink>
            <NavLink
              to={`/bai-viet/${blog.slug}`}
              className={styles.container__thumbnail__description__title}
            >
              {blog.title}
            </NavLink>
            <div className={styles.container__thumbnail__description__meta}>
              <img alt="" src={blog.image_url}></img>
              <p>
                {blog.writer.fullname}, {moment(blog.updated_at).fromNow()} |{" "}
                <AccessTimeIcon /> 15 min read
              </p>
            </div>
          </div>
        </div>
        <div className={styles.container__widget}>
          <Widget setBlog={setBlog} data={data} />
        </div>
      </div>
    </>
  );
};
export default BlogWidget;
