import * as React from "react";
import { NavLink } from "react-router-dom";
import fakedata from "../utils/CardSlider.json";
import Widget from "./blogWidgetContent";
import styles from "./styles/blogWidget.module.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const BlogWidget = () => {
  const data = fakedata.data;
  const [blog, setBlog] = React.useState(data[0]);
  return (
    <>
      <div className={styles.tabs}>
        <p className={styles.tabs__title}>Văn học</p>
      </div>
      <div className={styles.container}>
        <div
          className={styles.container__thumbnail}
          style={{ backgroundImage: `url(${blog.image_url}` }}
        >
            <div className={styles.container__thumbnail__description}>
            <NavLink to="category" className={styles.container__thumbnail__description__category}>{blog.category}</NavLink>
          <NavLink to="article" className={styles.container__thumbnail__description__title}>{blog.value}</NavLink>
          <div className={styles.container__thumbnail__description__meta}>
          <img alt="" src="https://picsum.photos/30"></img>
          <p>
            Thanh Hằng, 2 năm ago | <AccessTimeIcon /> 15 min read
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
