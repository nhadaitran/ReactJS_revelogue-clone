import * as React from "react";
import { NavLink } from "react-router-dom";
import fakedata from "../utils/CardSlider.json";
import styles from "./styles/cardSlider.module.scss";
import PrevIcon from "@mui/icons-material/NavigateBefore";
import NextIcon from "@mui/icons-material/NavigateNext";

const CardSlider = () => {
  const carousel = React.useRef();
  const carouselMobile = React.useRef();
  const data = fakedata.data;
  const [index, setIndex] = React.useState(0);
  const incrementCarousel = React.useCallback((value) => {
    var isMobile = Math.abs(value / 2) === 1 ? true : false;
    if (!carousel.current) return;
    if (!carouselMobile.current) return;
    var width = isMobile
      ? carouselMobile.current.offsetWidth
      : carousel.current.offsetWidth;
    var length = isMobile ? data.length - 1 : 1;
    var delta = isMobile ? value / 2 : value;
    if (index + delta > length) {
      setIndex(0);
      if (isMobile) {
        carouselMobile.current.scrollTo(0, 0);
        carousel.current.scrollTo(0, 0);
      } else {
        carousel.current.scrollTo(0, 0);
      }
      return;
    } else if (index + delta < 0) {
      setIndex(length);
      if (isMobile) {
        carouselMobile.current.scrollTo(width * length, 0);
      } else {
        carousel.current.scrollTo(width, 0);
      }
      return;
    }
    if (isMobile) {
      if (carouselMobile.current) {
        carouselMobile.current.scrollTo(
          carouselMobile.current.scrollLeft + width * delta,
          0
        );
      }
    } else {
      if (carousel.current) {
        carousel.current.scrollTo(
          carousel.current.scrollLeft + width * delta,
          0
        );
      }
    }
    setIndex((c) => c + delta);
  },[data,index]);
  React.useEffect(() => {
    const SliderInterval = setInterval(() => {
      incrementCarousel(1);
    }, 5000);
    return () => clearInterval(SliderInterval);
  }, [incrementCarousel]);
  return (
    <div className={styles.slider}>
      <div className={styles.cardGroup}>
        <CardGroup
          data={data}
          carousel={carousel}
          incrementCarousel={incrementCarousel}
        />
      </div>
      <div className={styles.cardGroupMobile}>
        <CardGroupMobile
          data={data}
          carousel={carouselMobile}
          incrementCarousel={incrementCarousel}
        />
      </div>
    </div>
  );
};

const CardGroup = (props) => {
  return (
    <>
      <button
        className={styles.slider__function__left}
        onClick={() => props.incrementCarousel(-1)}
      >
        <PrevIcon />
      </button>
      <div className={styles.slider__content} ref={props.carousel}>
        <div className={styles.slider__content__group}>
          <CardItem startIndex={0} endIndex={4} data={props.data} />
        </div>
        <div className={styles.slider__content__group}>
          <CardItem startIndex={4} endIndex={8} data={props.data} />
        </div>
      </div>
      <button
        className={styles.slider__function__right}
        onClick={() => props.incrementCarousel(1)}
      >
        <NextIcon />
      </button>
    </>
  );
};
const CardGroupMobile = (props) => {
  return (
    <>
      <button
        className={styles.slider__function__left}
        onClick={() => props.incrementCarousel(-2)}
      >
        <PrevIcon />
      </button>
      <div className={styles.slider__content}>
        <div className={styles.slider__content__mobile} ref={props.carousel}>
          <CardItem startIndex={0} endIndex={8} data={props.data} />
        </div>
      </div>
      <button
        className={styles.slider__function__right}
        onClick={() => props.incrementCarousel(2)}
      >
        <NextIcon />
      </button>
    </>
  );
};

const CardItem = (props) => {
  let { startIndex, endIndex, data } = props;
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
          <NavLink to="article" className={styles.slider__content__item__title}>
            {data.value}
          </NavLink>
        </div>
      ))}
    </>
  );
};
export default CardSlider;
