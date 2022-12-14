import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/imageSlider.module.scss";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
const ImageSlider = (props) => {
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
  const handleImageSlider = (e) => {
    return setIndex(e);
  };
  return (
    <div className={styles.slider}>
      {data.map((data, i) => (
        <NavLink
          to={`/bai-viet/${data.slug}`}
          key={i}
          className={`${styles.slider__thumbnail} ${
            index === i
              ? styles[`slider__thumbnail--open`]
              : styles[`slider__thumbnail--close`]
          }`}
          style={{ backgroundImage: `url(${data.image_url}` }}
        >
          <p
            to="article"
            className={`${styles.slider__thumbnail__title} ${
              index === i
                ? styles[`slider__thumbnail__title--open`]
                : styles[`slider__thumbnail__title--close`]
            }`}
          >
            {data.title}
          </p>
        </NavLink>
      ))}
      <ol className={styles.slider__indicator}>
        {data.map((data, i) => (
          <li
            key={i}
            className={`${styles.slider__indicator__item} ${
              index === i ? styles[`slider__indicator__item--active`] : {}
            }`}
            style={{ backgroundImage: `url(${data.image_url}` }}
            onClick={() => handleImageSlider(i)}
          >
            {index === i ? <CircleIcon /> : <CircleOutlinedIcon />}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default React.memo(ImageSlider);
