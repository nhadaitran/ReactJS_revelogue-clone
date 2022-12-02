import styles from "./index.module.scss";
import Eror404 from "../../../assets/images/404.png"
const Home = () => {
  return (
    <div className={styles.index}>
      <img src={`${Eror404}`} alt="404" />
      <span>Sorry</span>
      <div>nothing found</div>
    </div>
  );
};
export default Home;
