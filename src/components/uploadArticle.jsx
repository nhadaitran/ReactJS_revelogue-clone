import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadArticle } from "../redux/articleSlice";
import { API_URL } from "../redux/constants";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import axios from "axios";
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
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("writer", info._id);
    formData.append("category", categoryRef.current.value);
    formData.append("content", contentRef.current.value);
    formData.append("file", fileRef.current.files[0]);
    dispatch(uploadArticle(formData));
  };

  const uploadAdapter = (loader) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then(async (file) => {
            body.append("file", file);
            await axios
              .post(`${API_URL}upload`, body, {
                contentType: "multipart/form-data",
              })
              .then((res) => {
                resolve({default:`${res.data.url}`})
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
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
        <label forhtml="category">Category</label>
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
        <CKEditor
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "underline",
              "blockquote",
              "link",
              "|",
              "alignment:left",
              "alignment:center",
              "alignment:right",
              "alignment:justify",
              "|",
              "imageupload",
              "mediaembed",
              "|",
              "bulletedList",
              "numberedList",
              "|",
              "undo",
              "redo",
            ],
          }}
          editor={Editor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            editor.plugins.get("FileRepository").createUploadAdapter = (
              loader
            ) => {
              return uploadAdapter(loader);
            };
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log(data);
          }}
        />
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
