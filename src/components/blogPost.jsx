import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/blogPost.module.scss";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRightOutlined";
import moment from "moment";
const BlogPost = (props) => {
  let { data, title } = props;
  const carousel = React.useRef();
  const [index, setIndex] = React.useState(1);
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
      if (index + value > data.length - 2) {
        return;
      } else if (index + value <= 0) {
        return;
      } else {
        setIndex((c) => c + value);
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
        <FunctionButton
          incrementCarousel={incrementCarousel}
          index={index}
          data={data}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.container__group} ref={carousel}>
          {data.map((value, i) => (
            <div
              key={i}
              className={styles.container__group__item}
              style={{ backgroundImage: `url(${value.image_url}` }}
            >
              <div className={styles.container__group__item__content}>
                <NavLink
                  to={`/bai-viet/${value.slug}`}
                  className={styles.container__group__item__content__title}
                >
                  {value.title}
                </NavLink>
                <p className={styles.container__group__item__content__meta}>
                  {value.writer.fullname}, {moment(value.updated_at).fromNow()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const FunctionButton = (props) => {
  let { incrementCarousel, index, data } = props;
  return (
    <div className={styles.tabs__function}>
      {index === 1 ? (
        <button
          className={`${styles.tabs__function__previous} ${
            styles[`tabs__function__previous--disable`]
          }`}
          disabled
        >
          <ArrowCircleLeft />
        </button>
      ) : (
        <button
          className={styles.tabs__function__previous}
          onClick={() => incrementCarousel(-1)}
        >
          <ArrowCircleLeft />
        </button>
      )}
      {index === data.length - 2 ? (
        <button
          className={`${styles.tabs__function__next} ${
            styles[`tabs__function__next--disable`]
          }`}
          disabled
        >
          <ArrowCircleRight />
        </button>
      ) : (
        <button
          className={styles.tabs__function__next}
          onClick={() => incrementCarousel(1)}
        >
          <ArrowCircleRight />
        </button>
      )}
    </div>
  );
};
export default BlogPost;
