import * as React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../redux/articleSlice";
import styles from "./styles/widget.module.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import moment from "moment";
const Widget = () => {
  let dispatch = useDispatch();
  const news = useSelector((state) => state.article.listHome[0]);
  React.useEffect(() => {
    if (!news) {
      dispatch(getNews());
    }
  }, [dispatch, news]);
  return (
    <div className={styles.widget}>
      <p className={styles.widget__title}>Bài viết mới nhất</p>
      <div className={styles.widget__group}>
        {news &&
          news.newest.map((data, i) => (
            <div key={i} className={styles.widget__group__item}>
              <NavLink to={`/bai-viet/${data.slug}`} className={styles.widget__group__item__thumbnail}>
                <img alt="" src={`${data.image_url}`}></img>
              </NavLink>
              <div className={styles.widget__group__item__content}>
                <NavLink
                  className={styles.widget__group__item__content__title}
                  to={`/bai-viet/${data.slug}`}
                >
                  <p>{data.title}</p>
                </NavLink>
                <p className={styles.widget__group__item__content__meta}>
                  {" "}
                  {moment(data.updated_at).fromNow()} | <AccessTimeIcon /> 13
                  min read
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Widget;
