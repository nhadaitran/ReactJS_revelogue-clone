import * as React from "react";
import styles from "./index.module.scss";
import Loading from "../../components/loading";
const Content = React.lazy(() => import("../../components/content"));
const ImageMobile = React.lazy(() => import("../../assets/images/Web900x512.png"));
const Widget = React.lazy(() => import("../../components/widget"));
const Breadcrumb = React.lazy(() => import("../../components/breadcrumb"));
const Article = () => {
  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <Breadcrumb />
        <img className={styles.mobile} src={ImageMobile} alt="" />
        <div className={styles.index}>
          <Content />
          <div className={styles.index__widget}>
            <Widget />
          </div>
        </div>
      </React.Suspense>
    </>
  );
};
export default Article;
