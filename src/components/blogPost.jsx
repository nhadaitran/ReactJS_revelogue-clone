import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/blogPost.module.scss";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRightOutlined";
const BlogPost = (props) => {
  let { data, title } = props;
  const carousel = React.useRef();
  const [index, setIndex] = React.useState(0);
  const incrementCarousel = React.useCallback(
    (value) => {
      if (!carousel.current) return;
      let width;
      if (carousel.current.offsetWidth > 700) {
        width = Math.ceil(carousel.current.offsetWidth / 2);
      } else {
        width = carousel.current.offsetWidth;
      }
      if (carousel.current) {
        carousel.current.scrollTo(
          carousel.current.scrollLeft + width * value,
          0
        );
      }
      if (index + value > data.length - 1) {
        return;
      } else if (index + value < 0) {
        return;
      } else {
        setIndex((c) => c + value);
        return;
      }
    },
    [data, index]
  );
  React.useEffect(() => {
    const SliderInterval = setInterval(() => {
      incrementCarousel(1);
    }, 5000);
    return () => clearInterval(SliderInterval);
  }, [incrementCarousel]);
  return (
    <>
      <div className={styles.tabs}>
        <p className={styles.tabs__title}>{title}</p>
        <div className={styles.tabs__function}>
          <button
            className={styles.tabs__function__previous}
            onClick={() => incrementCarousel(-1)}
          >
            <ArrowCircleLeft />
          </button>
          <button
            className={styles.tabs__function__next}
            onClick={() => incrementCarousel(1)}
          >
            <ArrowCircleRight />
          </button>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.container__group} ref={carousel}>
          {data.map((value, i) => (
            <div
              key={i}
              className={styles.container__group__item}
              style={{ backgroundImage: `url(${value.image_url}` }}
            >
              <div
                className={`${styles.container__group__item__content} ${
                  i === index
                    ? styles[`container__group__item__content--active`]
                    : {}
                }`}
              >
                <NavLink
                  to="article"
                  className={styles.container__group__item__content__title}
                >
                  {value.value}
                </NavLink>
                <p className={styles.container__group__item__content__meta}>
                  Thanh Tiêu, 7 tháng ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default BlogPost;
