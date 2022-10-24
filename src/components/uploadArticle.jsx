import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {uploadArticle} from "../redux/articleSlice"
import styles from "./styles/uploadArticle.module.scss";
var slugify = require("slugify");

const UploadArticle = () => {
  let dispatch = useDispatch();
  const [title, setTitle] = React.useState("");
  const { list } = useSelector((state) => state.category);
  const { info } = useSelector((state) => state.user);
  let slug = slugify(title, { lower: true, strict: true });
  let categoryRef = React.useRef();
  let contentRef = React.useRef();
  let fileRef = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title',title);
    formData.append('slug',slug);
    formData.append('writer',info._id);
    formData.append('category',categoryRef.current.value);
    formData.append('content',contentRef.current.value);
    formData.append('file',fileRef.current.files[0]);
    dispatch(uploadArticle(formData));
    // console.log(categoryRef.current.value);
    // console.log(contentRef.current.value);
    // console.log(fileRef.current.files[0]);

    
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
        <input
          type="text"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.container__inputContainer}>
        <label>Slug</label>
        <br />
        {slug}
      </div>
      <div className={styles.container__inputContainer}>
        <label forHtml="category">Category</label>
        <br />
        <select name="category" id="category" ref={categoryRef}>
          {list.map(
            (data, i) =>
              data.status && (
                <option key={i} value={`${data._id}`}>
                  {data.title}
                </option>
              )
          )}
        </select>
      </div>
      <div className={styles.container__inputContainer}>
        <label>Content</label>
        <br />
        <input type="text" name="content" required ref={contentRef} />
      </div>
      <div className={styles.container__inputContainer}>
        <label>Image</label>
        <br />
        <input type="file" name="file" required ref={fileRef} />
      </div>
      <div className={styles.container_buttonContainer}>
        <input type="submit" value="Upload" />
      </div>
    </form>
  );
};
export default UploadArticle;