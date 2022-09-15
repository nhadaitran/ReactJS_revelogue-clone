import styles from "./index.module.scss";
import Widget from "../../components/widget";
import Category from "../../components/content";
import Breadcrumb from "../../components/breadcrumb";
import ImageMobile from "../../assets/images/Web900x512.png";
const Article = () => {
  return (
    <>
      <Breadcrumb />
      <img className={styles.mobile} src={ImageMobile} alt="" />
      <div className={styles.index}>
        <Category />
        <Widget />
      </div>
    </>
  );
};
export default Article;
