import styles from "./index.module.scss";
import UploadArticle from "../../components/uploadArticle";
const Upload = () => {
  return (
    <div className={styles.index}>
      <UploadArticle />
    </div>
  );
};
export default Upload;
