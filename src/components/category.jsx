import * as React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import moment from "moment";
import { getArticlesByCategorySlug } from "../redux/articleSlice";
import styles from "./styles/category.module.scss";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { StoreContext } from "../utils/store";
const Category = () => {
  const value = React.useContext(StoreContext);
  const setBreadcrumb = value.breadcrumb[1];
  let dispatch = useDispatch();
  let { slug } = useParams();
  const category = useSelector((state) =>
    state.category.list.find((c) => c.slug === slug)
  );
  const articles = useSelector((state) =>
    state.article.listByCategory.find((c) => Object.keys(c)[0] === slug)
  );
  React.useEffect(() => {
    if (!articles) {
      dispatch(getArticlesByCategorySlug(slug));
    }
  }, [category]);

  React.useEffect(() => {
    var arr = [];
    arr.push(category.title);
    setBreadcrumb(arr);
  }, [category, setBreadcrumb]);
  return (
    <div className={styles.container}>
      <div className={styles.container__group}>
        {articles !== undefined
          ? articles[slug].map((data, i) => (
              <div className={styles.container__group__card} key={i}>
                <div className={styles.container__group__card__thumbnail}>
                  <img src={`${data.image_url}`} alt="" />
                </div>
                <div className={styles.container__group__card__body}>
                  <p className={styles.container__group__card__body__category}>
                    {data.category.title}
                  </p>
                  <NavLink
                    to={`/bai-viet/${data.slug}`}
                    className={styles.container__group__card__body__title}
                  >
                    {data.title} <SaveButton />
                  </NavLink>
                  <p
                    className={styles.container__group__card__body__description}
                  >
                    {parse(data.content)}
                  </p>
                  <p className={styles.container__group__card__body__meta}>
                    {data.writer.fullname}, {moment(data.updated_at).fromNow()}{" "}
                    | <AccessTimeIcon /> 15 min read
                  </p>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

const SaveButton = () => {
  return (
    <button className={styles.save}>
      <BookmarkBorderIcon />
    </button>
  );
};
export default Category;
