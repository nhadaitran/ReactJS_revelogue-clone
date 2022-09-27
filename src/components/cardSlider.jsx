import * as React from "react";
import { NavLink } from "react-router-dom";
import fakedata from "../utils/CardSlider.json";
import styles from "./styles/cardSlider.module.scss";
import PrevIcon from "@mui/icons-material/NavigateBefore";
import NextIcon from "@mui/icons-material/NavigateNext";

const CardSlider = () => {
  return (
    <div className={styles.slider}>
      <button className={styles.slider__function__left}>
        <PrevIcon />
      </button>
      <div className={styles.slider__content}>
        <div className={styles.slider__content__group}>
          <CardItem startIndex={0} endIndex={4} />
        </div>
        <div className={styles.slider__content__group}>
          <CardItem startIndex={4} endIndex={8} />
        </div>
        <div className={styles.slider__content__mobile}>
          <CardItem startIndex={0} endIndex={8} />
        </div>
      </div>
      <button className={styles.slider__function__right}>
        <NextIcon />
      </button>
    </div>
  );
};

const CardItem = (props) => {
  const data = fakedata.data;
  let { startIndex, endIndex } = props;
  let subset = data.slice(startIndex, endIndex);
  return (
    <>
      {subset.map((data, i) => (
        <div
          key={i}
          className={styles.slider__content__item}
          style={{ backgroundImage: `url(${data.image_url}` }}
        >
          <div className={styles.slider__content__item__category}>
            <p>{data.category}</p>
          </div>
          <NavLink to="article" className={styles.slider__content__item__title}>{data.value}</NavLink>
        </div>
      ))}
    </>
  );
};
export default CardSlider;
