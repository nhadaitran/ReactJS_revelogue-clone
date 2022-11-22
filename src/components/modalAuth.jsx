import * as React from "react";
import styles from "./styles/modalAuth.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { HTTP_STATUS } from "../redux/constants";
import { login } from "../redux/userSlice";
import { StoreContext } from "../utils/store";
const ModalAuth = () => {
  let dispatch = useDispatch();
  const value = React.useContext(StoreContext);
  const closeModal = value.auth[1];
  const [isLogin, setIsLogin] = React.useState(true);
  //   const useOutsideClick = (ref) => {
  //     React.useEffect(() => {
  //       function handleClickOutside(event) {
  //         if (ref.current && !ref.current.contains(event.target)) {
  //           alert("You clicked outside of me!");
  //         }
  //       }
  //       // Bind the event listener
  //       document.addEventListener("mousedown", handleClickOutside);
  //       return () => {
  //         // Unbind the event listener on clean up
  //         document.removeEventListener("mousedown", handleClickOutside);
  //       };
  //     }, [ref]);
  //   };
  const wrapperRef = React.useRef(null);
  //   useOutsideClick(wrapperRef);
  const handleSubmitLogin = (formData) => {
    dispatch(login(formData));
  };
  const { status } = useSelector((state) => state.user);
  React.useEffect(() => {
    if (status === HTTP_STATUS.PENDING) {
      closeModal(false);
    } else if (status === HTTP_STATUS.REJECTED) {
      closeModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
  return (
    <div className={styles.modal}>
      <ButtonClose closeModal={closeModal} />
      <div className={styles.modal__container} ref={wrapperRef}>
        <div className={styles.modal__container__auth}>
          <button
            className={`${styles.modal__container__auth__title} ${
              isLogin ? styles["modal__container__auth__title--active"] : {}
            }`}
            onClick={() => (isLogin ? "" : setIsLogin((c) => !c))}
          >
            Login
          </button>
          <button
            className={`${styles.modal__container__auth__title} ${
              isLogin ? {} : styles["modal__container__auth__title--active"]
            }`}
            onClick={() => (isLogin ? setIsLogin((c) => !c) : "")}
          >
            Register
          </button>
        </div>
        <div className={styles.modal__container__form}>
          {isLogin ? (
            <FormLogin onSubmit={handleSubmitLogin} />
          ) : (
            <FormRegister />
          )}
        </div>
      </div>
    </div>
  );
};

const ButtonClose = (props) => {
  const { closeModal } = props;
  return (
    <button className={styles.modal__button} onClick={() => closeModal(null)}>
      <CloseIcon />
    </button>
  );
};

const FormLogin = ({ onSubmit }) => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className={styles.modal__container__form__inputContainer}>
        <label>Địa chỉ Email</label>
        <br />
        <input type="email" name="email" required ref={emailRef} />
      </div>
      <div className={styles.modal__container__form__inputContainer}>
        <label>Mật khẩu</label>
        <br />
        <input type="password" name="password" required ref={passwordRef} />
      </div>
      <div className={styles.modal__container__form__authContainer}>
        <div className={styles.modal__container__form__authContainer__remember}>
          <input type="checkbox" id="checkboxAuth" />
          <label htmlFor="checkboxAuth">Tự động đăng nhập</label>
        </div>
        <button
          className={styles.modal__container__form__authContainer__forgot}
        >
          Forgot password
        </button>
      </div>
      <div className={styles.modal__container__form__buttonContainer}>
        <input type="submit" value="Đăng nhập" />
      </div>
    </form>
  );
};
const FormRegister = () => {
  return (
    <form autoComplete="off">
      <div className={styles.modal__container__form__inputContainer}>
        <label>Tên người đùng</label>
        <br />
        <input type="text" name="username" required />
      </div>
      <div className={styles.modal__container__form__inputContainer}>
        <label>Email</label>
        <br />
        <input type="text" name="email" required />
      </div>
      <div className={styles.modal__container__form__inputContainer}>
        <label>Mật khẩu</label>
        <br />
        <input type="password" name="password" required />
      </div>
      <div className={styles.modal__container__form__buttonContainer}>
        <input type="submit" value="Đăng ký" />
      </div>
    </form>
  );
};
export default ModalAuth;
