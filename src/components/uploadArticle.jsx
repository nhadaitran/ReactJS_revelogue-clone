import * as React from "react";
import { useDispatch } from "react-redux";
import styles from "./styles/uploadArticle.module.scss";

const UploadArticle = () => {
  const [title, setTitle] = React.useState();
  const slug = title;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.container__inputContainer}>
        <label>Title</label>
        <br />
        <input type="text" name="title" required onChange={(e)=>setTitle(e.target.value)} />
      </div>
      <div className={styles.container__inputContainer}>
        <label>Slug</label>
        <br />
        {slug}
      </div>
      <div className={styles.container_buttonContainer}>
        <input type="submit" value="Upload" />
      </div>
    </form>
  );
};
export default UploadArticle;
