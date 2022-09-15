import styles from "./styles/widget.module.scss";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const NewArticle = () => {
  return (
    <div className={styles.widget}>
      <p className={styles.widget__title}>Bài viết mới nhất</p>
      <div className={styles.widget__group}>
        <div className={styles.widget__group__item}>
            <a href={"/"} className={styles.widget__group__item__thumbnail}><img alt="" src="https://picsum.photos/70"></img></a>
            <div className={styles.widget__group__item__content}>
                <a className={styles.widget__group__item__content__title} href={"/"}><p>Ra-ma buộc tội: Bức tranh lịch sử văn hoá Ấn Độ</p></a>
                <p className={styles.widget__group__item__content__meta}> 5 tháng ago | <AccessTimeIcon/> 13 min read</p>
            </div>
        </div>

        <div className={styles.widget__group__item}>
            <a href={"/"} className={styles.widget__group__item__thumbnail}><img alt="" src="https://picsum.photos/70"></img></a>
            <div className={styles.widget__group__item__content}>
                <a className={styles.widget__group__item__content__title} href={"/"}><p>Ra-ma buộc tội: Bức tranh lịch sử văn hoá Ấn Độ</p></a>
                <p className={styles.widget__group__item__content__meta}> 5 tháng ago | <AccessTimeIcon/> 13 min read</p>
            </div>
        </div>

        
      </div>
    </div>
  );
};
export default NewArticle;
