import * as React from "react";
import styles from "./styles/content.module.scss";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import moment from "moment";
import { getArticle } from "../redux/articleSlice";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { StoreContext } from "../utils/store";
const MainArticle = () => {
  const value = React.useContext(StoreContext);
  const setBreadcrumb = value.breadcrumb[1];
  const openAuth = value.auth[1];
  const data = value.preview[0];
  let dispatch = useDispatch();
  let location = useLocation();
  let { slug } = useParams();
  let article = useSelector((state) => state.article.item);
  if (data !== null) {
    article = data;
  }

  React.useEffect(() => {
    if (!article || article.slug !== slug || article === null) {
      location.pathname.search("admin") !== 1 && dispatch(getArticle(slug));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    var arr = [];
    if (Boolean(article)) {
      arr.push(article.category.title);
      arr.push(article.title);
    }
    setBreadcrumb(arr);
  }, [article, setBreadcrumb]);
  return (
    <div className={styles.container}>
      <div>
        <ContentCopyIcon />
      </div>
      {Boolean(article) && (
        <div className={styles.content}>
          <p className={styles.content__category}>
            {
              <NavLink to={`/danh-muc/${article.category.slug}`}>
                {article.category.title}
              </NavLink>
            }
          </p>
          <p className={styles.content__title}>
            {article.title}
            <SaveButton openAuth={openAuth} />
          </p>
          <div className={styles.content__writer}>
            <img alt="" src={`${article.writer.image_url}`}></img>
            <p>
              {article.writer.fullname}, {moment(article.updated_at).fromNow()}{" "}
              | <AccessTimeIcon /> 15 min read |
              <RemoveRedEyeOutlinedIcon /> {article.view}{" "}
              <SaveButtonMobile openAuth={openAuth} />
            </p>
          </div>
          <div className={styles.content__main}>{parse(article.content)}</div>
        </div>
      )}
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
