import * as React from "react";
import styles from "./styles/modalAlert.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { StoreContext } from "../utils/store";
const ModalAlert = () => {
  const value = React.useContext(StoreContext);
  const closeModal = value.alert[1];
  const useOutsideClick = (ref) => {
    React.useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeModal(null);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef);
  const handleLogout = () => {
    if(value.alert[0].type === "admin"){
      value.alert[0].logout()
    }
    closeModal(null);
  }
  return (
    <div className={styles.modal}>
      <ButtonClose closeModal={closeModal} />
      <div className={styles.modal__container} ref={wrapperRef}>
        <div className={styles.modal__container__logo}>
          <ErrorIcon />
        </div>
        <div className={styles.modal__container__title}>
          Bạn có chắc muốn đăng xuất ?
        </div>
        <div className={styles.modal__container__button}>
          <button onClick={() => handleLogout() }>Đồng ý</button>
        </div>
      </div>
    </div>
  );
};

const ButtonClose = (props) => {
  const { closeModal } = props;
  return (
    <button className={styles.modal__close} onClick={() => closeModal(null)}>
      <CloseIcon />
    </button>
  );
};
export default ModalAlert;
