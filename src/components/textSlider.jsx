import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/textSlider.module.scss";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRightOutlined";

const TextSlider = (props) => {
  const data = props.data;
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const SliderInterval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex !== data.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(SliderInterval);
  }, [data.length]);
  const handleNextSlider = () => {
    if (index !== data.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setIndex(0);
    }
  };
  const handlePrevSlider = () => {
    if (index !== 0) {
      setIndex((prevIndex) => prevIndex - 1);
    } else {
      setIndex(data.length - 1);
    }
  };
  return (
    <div className={styles.slider}>
      <p className={styles.slider__title}>Trending</p>
      {data.map((data, i) => (
        <div
          key={i}
          className={`${styles.slider__post} ${
            index === i
              ? styles[`slider__post--open`]
              : styles[`slider__post--close`]
          }`}
        >
          <div className={styles.slider__post__thumbnail}>
            <img src={`${data.image_url}`} alt="" />
          </div>
          <NavLink to={`/bai-viet/${data.slug}`} className={styles.slider__post__content}>
            {data.title}
          </NavLink>
        </div>
      ))}
      <div className={styles.slider__function}>
        <button
          className={styles.slider__function__previous}
          onClick={handlePrevSlider}
        >
          <ArrowCircleLeft />
        </button>
        <button
          className={styles.slider__function__next}
          onClick={handleNextSlider}
        >
          <ArrowCircleRight />
        </button>
      </div>
    </div>
  );
};

export default React.memo(TextSlider);
