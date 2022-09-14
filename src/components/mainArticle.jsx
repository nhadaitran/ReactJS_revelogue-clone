import styles from "./styles/mainArticle.module.scss";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
const MainArticle = () => {
  return (
    <div className={styles.container}>
      <div><ContentCopyIcon/></div>
      <div className={styles.content}>
        <p className={styles.content__category}><a href={"/"}>Nhân vật nổi bật </a></p>
        <p className={styles.content__title}>Nguyễn Gia Trí: Người đưa sơn mài thành biểu tượng của mỹ thuật Việt<SaveButton/></p>
        <div className={styles.content__writer}>
            <img alt="" src="https://picsum.photos/30"></img>
            <p>Thanh Hằng, 2 năm ago | <AccessTimeIcon/> 15 min read | <RemoveRedEyeOutlinedIcon/> 213 <button className={styles.save__moblie}> | <ContentCopyIcon/> </button></p>
        </div>
        <div className={styles.content__main}>
            abcdef
        </div>
      </div>
    </div>
  );
};
const SaveButton = () => {
    return <button className={styles.save}><BookmarkBorderIcon/></button>;
  };
export default MainArticle;
