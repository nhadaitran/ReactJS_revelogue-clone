import * as React from "react";
import styles from "./styles/modalAuth.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { HTTP_STATUS } from "../redux/constants";
import { login, register } from "../redux/userSlice";
import { StoreContext } from "../utils/store";
import { regex, errorMessage } from "../redux/constants";
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
  const handleSubmit = (data) => {
    if (data.type == "login") {
      dispatch(login(data));
    } else if (data.type == "register") {
      dispatch(register(data));
    }
  };

  const { status } = useSelector((state) => state.user);
  React.useEffect(() => {
    if (status === HTTP_STATUS.PENDING) {
      closeModal(false);
    } else if (status === HTTP_STATUS.REJECTED) {
      closeModal(true);
    }
  }, [closeModal, status]);
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
            <FormLogin onSubmit={handleSubmit} />
          ) : (
            <FormRegister onSubmit={handleSubmit} />
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
      type: "login",
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

const FormRegister = ({ onSubmit }) => {
  const [values, setValues] = React.useState({
    fullname: "",
    username: "",
    email: "",
    sex: "",
    password: "",
    confirmPassword: "",
  });
  const [focused, setFocused] = React.useState(false);
  const [groupInput, setGroupInput] = React.useState(1);

  const handleFocus =(e)=>{
    setFocused(true)
  }
  // const fullnameRef = React.useRef();
  // const usernameRef = React.useRef();
  // const maleRef = React.useRef();
  // const femaleRef = React.useRef();
  // const otherRef = React.useRef();
  // const emailRef = React.useRef();
  // const passwordRef = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    // onSubmit({
    //   type: "register",
    //   fullname: fullnameRef.current.value,
    //   username: usernameRef.current.value,
    //   sex: maleRef.current.checked
    //     ? maleRef.current.value
    //     : femaleRef.current.checked
    //     ? femaleRef.current.value
    //     : otherRef.current.value,
    //   email: emailRef.current.value,
    //   password: passwordRef.current.value,
    // });
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div
        className={
          groupInput === 1
            ? styles[`modal__container__form__groupInput--open`]
            : styles[`modal__container__form__groupInput--close`]
        }
      >
        <div
          className={styles.modal__container__form__groupInput__inputContainer}
        >
          <label htmlFor="fullname">Tên người đùng</label>
          <br />
          <input
            type="text"
            name="fullname"
            id="fullname"
            // ref={fullnameRef}
            pattern={regex.validFullname}
            onChange={onChange}
            required
          />
          <span>*{errorMessage.fullname}</span>
        </div>
        <div
          className={styles.modal__container__form__groupInput__inputContainer}
        >
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            // ref={usernameRef}
            pattern={regex.validUsername}
            onChange={onChange}
            required
          />
          <span>*{errorMessage.username}</span>
        </div>
        <div
          className={styles.modal__container__form__groupInput__inputContainer}
        >
          <label>Bạn là:</label>
          <div
            className={
              styles.modal__container__form__groupInput__inputContainer__checkboxContainer
            }
          >
            <div
              className={
                styles.modal__container__form__groupInput__inputContainer__checkboxContainer__checkbox
              }
            >
              <input
                type="radio"
                name="sex"
                id="male"
                // ref={maleRef}
                onChange={onChange}
                value="1"
                defaultChecked
              />
              <label htmlFor="male">Nam</label>
            </div>
            <div
              className={
                styles.modal__container__form__groupInput__inputContainer__checkboxContainer__checkbox
              }
            >
              <input
                type="radio"
                name="sex"
                id="female"
                // ref={femaleRef}
                onChange={onChange}
                value="0"
              />
              <label htmlFor="female">Nữ</label>
            </div>
            <div
              className={
                styles.modal__container__form__groupInput__inputContainer__checkboxContainer__checkbox
              }
            >
              <input
                type="radio"
                name="sex"
                id="other"
                // ref={otherRef}
                onChange={onChange}
                value="2"
              />
              <label htmlFor="other">Khác</label>
            </div>
          </div>
        </div>
        <div
          className={styles.modal__container__form__groupInput__buttonContainer}
        >
          <button onClick={() => setGroupInput(2)}>Tiếp tục</button>
        </div>
      </div>

      <div
        className={
          groupInput === 2
            ? styles[`modal__container__form__groupInput--open`]
            : styles[`modal__container__form__groupInput--close`]
        }
      >
        <div
          className={styles.modal__container__form__groupInput__inputContainer}
        >
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            // ref={emailRef}
            pattern={`${regex.validEmail}`}
            onChange={onChange}
            required
          />
          <span>*{errorMessage.email}</span>
        </div>
        <div
          className={styles.modal__container__form__groupInput__inputContainer}
        >
          <label htmlFor="password">Mật khẩu</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            // ref={passwordRef}
            onChange={onChange}
            required
          />
          <span>*{errorMessage.password}</span>
        </div>
        <div
          className={styles.modal__container__form__groupInput__inputContainer}
        >
          <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={onChange}
            pattern={+values.password}
            required
          />
          <span>*{errorMessage.confirmPassword}</span>
        </div>
        <div
          className={styles.modal__container__form__groupInput__buttonContainer}
        >
          <button onClick={() => setGroupInput(1)}>Quay lại</button>
          <input type="submit" value="Đăng ký" />
        </div>
      </div>
    </form>
  );
};
export default ModalAuth;
