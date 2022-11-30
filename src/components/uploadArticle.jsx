import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadArticle, saveTempArticle } from "../redux/articleSlice";
import { API_URL } from "../redux/constants";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import axios from "axios";
import styles from "./styles/uploadArticle.module.scss";
import slugify from "slugify";

const UploadArticle = () => {
  let dispatch = useDispatch();
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [imageTitle, setImageTitle] = React.useState(null);

  const { listUnNested } = useSelector((state) => state.category);
  const { info } = useSelector((state) => state.user);
  const tempContent = useSelector((state) => state.article.tempContent);

  let slug = slugify(title, { lower: true, strict: true });

  let categoryRef = React.useRef();
  let fileRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("writer", info._id);
    formData.append("category", categoryRef.current.value);
    formData.append("content", content);
    formData.append("file", fileRef.current.files[0]);
    dispatch(uploadArticle(formData));
  };

  const handleImageChange = (e) => {
    setImageTitle(URL.createObjectURL(e.target.files[0]));
  };

  React.useEffect(() => {
    tempContent !== null ? setContent(tempContent) : setContent("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    dispatch(saveTempArticle(content));
  }, [content, dispatch]);

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
                resolve({ default: `${res.data.url}` });
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
        <label htmlFor="title">Tiêu đề:</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.container__inputContainer}>
        <label htmlFor="slug">Slug tiêu đề:</label>
        <input
          type="text"
          name="slug"
          id="slug"
          defaultValue={slug}
          readOnly
          required
        />
      </div>
      <div className={styles.container__inputContainer}>
        <label htmlFor="category">Danh mục:</label>
        <select name="category" id="category" ref={categoryRef}>
          {listUnNested.map(
            (data, i) =>
              data.status && (
                <option key={i} value={`${data._id}`}>
                  {data.title}
                </option>
              )
          )}
        </select>
      </div>

      <div className={styles.container__inputContainer__file}>
        <input
          type="file"
          name="file"
          title="Click me to upload image"
          required
          ref={fileRef}
          onChange={handleImageChange}
        />
        <div className={styles.container__inputContainer__file__dummy}>
          {imageTitle === null ? (
            <span>Please select an image</span>
          ) : (
            <img src={imageTitle} alt="imageTitle" />
          )}
        </div>
      </div>

      <CKEditor
        config={{
          toolbar: {
            items: [
              "heading",
              "|",
              "alignment",
              "|",
              "bold",
              "italic",
              "strikethrough",
              "underline",
              "subscript",
              "superscript",
              "|",
              "link",
              "|",
              "bulletedList",
              "numberedList",
              "todoList",
              "-",
              "fontfamily",
              "fontsize",
              "fontColor",
              "fontBackgroundColor",
              "|",
              "insertTable",
              "|",
              "outdent",
              "indent",
              "|",
              "uploadImage",
              "mediaEmbed",
              "blockQuote",
              "|",
              "undo",
              "redo",
            ],
            shouldNotGroupWhenFull: true,
          },
        }}
        data={content}
        editor={Editor}
        onReady={(editor) => {
          editor.plugins.get("FileRepository").createUploadAdapter = (
            loader
          ) => {
            return uploadAdapter(loader);
          };
        }}
        onChange={(event, editor) => {
          setContent(editor.getData());
        }}
      />

      <div className={styles.container__buttonContainer}>
        <input type="submit" value="Upload" />
      </div>
    </form>
  );
};
export default UploadArticle;
