import * as React from "react";
import styles from "./styles/modalPreview.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { HTTP_STATUS } from "../redux/constants";
import { login } from "../redux/userSlice";
import { StoreContext } from "../utils/store";
import MainArticle from "./content";
const ModalPreview = () => {
  let dispatch = useDispatch();
  const value = React.useContext(StoreContext);
  const data = value.preview[0];
  const closeModal = value.preview[1];
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
  const handleSubmitLogin = (formData) => {
    dispatch(login(formData));
  };
  const { status } = useSelector((state) => state.user);
  React.useEffect(() => {
    if (status === HTTP_STATUS.PENDING) {
      closeModal(null);
    } else if (status === HTTP_STATUS.REJECTED) {
      closeModal(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
  return (
    <div className={styles.modal}>
      <ButtonClose closeModal={closeModal} />
      <div className={styles.modal__container} ref={wrapperRef}>
        <MainArticle />
      </div>
    </div>
  );
};

const ButtonClose = (props) => {
  const { closeModal } = props;
  return (
    <button className={styles.modal__button} onClick={() => closeModal(false)}>
      <CloseIcon />
    </button>
  );
};

export default ModalPreview;
