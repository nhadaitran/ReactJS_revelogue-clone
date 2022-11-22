import * as React from "react";
import styles from "./index.module.scss";
import Widget from "../../components/widget";
import Breadcrumb from "../../components/breadcrumb";
import ImageMobile from "../../assets/images/Web900x512.png";
// import Content from "../../components/content";
import Loading from "../../components/loading";
const Content = React.lazy(() => import("../../components/content"));
const Article = () => {
  return (
    <>
      <Breadcrumb />
      <img className={styles.mobile} src={ImageMobile} alt="" />
      <div className={styles.index}>
        <React.Suspense fallback={<Loading />}>
          <Content />
        </React.Suspense>
        <div className={styles.index__widget}>
          <Widget />
        </div>
      </div>
    </>
  );
};
export default Article;
