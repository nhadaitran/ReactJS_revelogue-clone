import styles from "./index.module.scss";
import Widget from "../../components/widget";
import Content from "../../components/content";
import Breadcrumb from "../../components/breadcrumb";
import ImageMobile from "../../assets/images/Web900x512.png";
const Article = () => {
  return (
    <>
      <Breadcrumb />
      <img className={styles.mobile} src={ImageMobile} alt="" />
      <div className={styles.index}>
        <Content/>
        <div className={styles.index__widget}>
          <Widget />
        </div>
      </div>
    </>
  );
};
export default Article;
