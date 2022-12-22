import styles from "./index.module.scss";
import Eror401 from "../../../assets/images/401.png";
import { useNavigate } from "react-router-dom";
const Unauthorized = () => {
  let navigate = useNavigate(true);
  const goBack = () => navigate(-1);
  return (
    <div className={styles.index}>
      <img src={`${Eror401}`} alt="401" />
      <span>Sorry,</span>
      <div>you're not allowed!</div>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};
export default Unauthorized;
