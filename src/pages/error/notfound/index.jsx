import styles from "./index.module.scss";
import Eror404 from "../../../assets/images/404.png";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  let navigate = useNavigate(true);
  const goBack = () => navigate(-1);
  return (
    <div className={styles.index}>
      <img src={`${Eror404}`} alt="404" />
      <span>Sorry,</span>
      <div>nothing found!</div>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};
export default NotFound;
