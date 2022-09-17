import { NavLink } from "react-router-dom";
import styles from "./styles/category.module.scss";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const Category = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__group}>
        <div className={styles.container__group__card}>
          <div className={styles.container__group__card__thumbnail}>
            <img src="https://picsum.photos/585/390" alt="" />
          </div>
          <div className={styles.container__group__card__body}>
            <p className={styles.container__group__card__body__category}>Thơ</p>
            <NavLink to="/article" className={styles.container__group__card__body__title}>
              Chúng ta chọn yêu vì được ai đó cũng yêu mình <SaveButton />
            </NavLink>
            <p className={styles.container__group__card__body__description}>
              Em có biết tình yêu là gì không? Ví như cây con đang mùa khô hạn
              Mưa đến dịu dàng cùng dòng nước mát Thế là từ đó viết nên chuyện
              đất trờiEm có biết thanh âm vừa vặn nhất trên{" "}
            </p>
            <p className={styles.container__group__card__body__meta}>
              Thanh Hằng, 2 năm ago | <AccessTimeIcon /> 15 min read
            </p>
          </div>
        </div>

        <div className={styles.container__group__card}>
          <div className={styles.container__group__card__thumbnail}>
            <img src="https://picsum.photos/585/390" alt="" />
          </div>
          <div className={styles.container__group__card__body}>
            <p className={styles.container__group__card__body__category}>Thơ</p>
            <NavLink to="/article" className={styles.container__group__card__body__title}>
              Chúng ta chọn yêu vì được ai đó cũng yêu mình <SaveButton />
            </NavLink>
            <p className={styles.container__group__card__body__description}>
              Em có biết tình yêu là gì không? Ví như cây con đang mùa khô hạn
              Mưa đến dịu dàng cùng dòng nước mát Thế là từ đó viết nên chuyện
              đất trờiEm có biết thanh âm vừa vặn nhất trên{" "}
            </p>
            <p className={styles.container__group__card__body__meta}>
              Thanh Hằng, 2 năm ago | <AccessTimeIcon /> 15 min read
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

const SaveButton = () => {
  return (
    <button className={styles.save}>
      <BookmarkBorderIcon />
    </button>
  );
};
export default Category;
