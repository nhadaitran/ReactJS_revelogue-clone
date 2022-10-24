import * as React from "react";
import styles from "./styles/content.module.scss";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticle } from "../redux/articleSlice";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
const MainArticle = (props) => {
  const { openAuth } = props;
  let dispatch = useDispatch();
  let { slug } = useParams();
  const article = useSelector((state) => state.article.item);
  React.useEffect(() => {
    if (!article || article.slug !== slug || article === null) {
      dispatch(getArticle(slug));
    }
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <ContentCopyIcon />
      </div>
      <div className={styles.content}>
        <p className={styles.content__category}>
          {article ? (
            <NavLink to={`/${article.category.slug}`}>
              {article.category.title}
            </NavLink>
          ) : (
            ""
          )}
        </p>
        <p className={styles.content__title}>
          {article ? article.title : ""}
          <SaveButton openAuth={openAuth} />
        </p>
        <div className={styles.content__writer}>
          <img alt="" src="https://picsum.photos/30"></img>
          <p>
            {article ? article.writer.fullname : ""}, 2 năm ago |{" "}
            <AccessTimeIcon /> 15 min read |
            <RemoveRedEyeOutlinedIcon /> 213{" "}
            <SaveButtonMobile openAuth={openAuth} />
          </p>
        </div>
        <div className={styles.content__main}>
          {article ? article.content : ""}
        </div>
      </div>
    </div>
  );
};
const SaveButton = (props) => {
  const { openAuth } = props;
  return (
    <button className={styles.save} onClick={() => openAuth(true)}>
      <BookmarkBorderIcon />
    </button>
  );
};

const SaveButtonMobile = (props) => {
  const { openAuth } = props;
  return (
    <button className={styles.save__moblie} onClick={() => openAuth(true)}>
      | <BookmarkBorderIcon />
    </button>
  );
};
export default MainArticle;
