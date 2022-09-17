import styles from "./index.module.scss";
import Widget from "../../components/widget";
import Category from "../../components/category";
import Breadcrumb from "../../components/breadcrumb";
const Article = () => {
  return (
    <>
      <Breadcrumb />
      <div className={styles.index}>
        <Category />
        <Widget />
      </div>
    </>
  );
};
export default Article;
