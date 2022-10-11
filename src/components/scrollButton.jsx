import * as React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./styles/scrollButton.module.scss";

const ScrollButton = () => {
  const [visible, setVisible] = React.useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      scrolled > 200 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener("scroll", toggleVisible);
  }, [visible]);

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.button} ${
        visible ? styles["button--scrolled"] : {}
      }`}
    >
      <KeyboardArrowUpIcon />
    </button>
  );
};

export default ScrollButton;
