import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./styles/modalAuth.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { HTTP_STATUS } from "../redux/constants";
import { login, register } from "../redux/userSlice";
import { StoreContext } from "../utils/store";
import { regex, errorMessage } from "../redux/constants";
const ModalAuth = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const value = React.useContext(StoreContext);
  const closeModal = value.auth[1];
  const [isLogin, setIsLogin] = React.useState(true);
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
  const handleSubmit = (data) => {
    if (data.type == "login") {
      dispatch(login(data)).then(() => {
        navigate(from, { replace: true });
        closeModal(false);
      });
    } else if (data.type == "register") {
      dispatch(register(data)).then(() => {
        navigate(from, { replace: true });
        closeModal(false);
      });
    }
  };
  const { status } = useSelector((state) => state.user);
  return (
    <div
      className={styles.modal}
      style={{ display: status === HTTP_STATUS.PENDING ? "none" : "block" }}
    >
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
    sex: "1",
    password: "",
    confirmPassword: "",
  });
  const [invalidFullname, setInvalidFullname] = React.useState(false);
  const [invalidUsername, setInvalidUsername] = React.useState(false);
  const [invalidEmail, setInvalidEmail] = React.useState(false);
  const [invalidPassword, setInvalidPassword] = React.useState(false);
  const [invalidConfirm, setInvalidConfirm] = React.useState(false);
  const [groupInput, setGroupInput] = React.useState(1);

  const fullnameRef = React.useRef();
  // const usernameRef = React.useRef();
  // const maleRef = React.useRef();
  // const femaleRef = React.useRef();
  // const otherRef = React.useRef();
  // const emailRef = React.useRef();
  // const passwordRef = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      type: "register",
      fullname: values.fullname,
      username: values.username,
      sex: values.sex,
      email: values.email,
      password: values.password,
    });
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onBlur = (e) => {
    if (e.target.name === "fullname") {
      if (regex.validFullname.test(e.target.value)) {
        setInvalidFullname(false);
      } else if (!regex.validFullname.test(e.target.value)) {
        setInvalidFullname(true);
      }
    }

    if (e.target.name === "username") {
      if (regex.validUsername.test(e.target.value)) {
        setInvalidUsername(false);
      } else if (!regex.validUsername.test(e.target.value)) {
        setInvalidUsername(true);
      }
    }

    if (e.target.name === "email") {
      if (regex.validEmail.test(e.target.value)) {
        setInvalidEmail(false);
      } else if (!regex.validEmail.test(e.target.value)) {
        setInvalidEmail(true);
      }
    }

    if (e.target.name === "password") {
      if (regex.validPassword.test(e.target.value)) {
        setInvalidPassword(false);
      } else if (!regex.validPassword.test(e.target.value)) {
        setInvalidPassword(true);
      }
      if (e.target.value === values.confirmPassword) {
        setInvalidConfirm(false);
      } else {
        setInvalidConfirm(true);
      }
    }

    if (e.target.name === "confirmPassword") {
      if (e.target.value === values.password) {
        setInvalidConfirm(false);
      } else {
        setInvalidConfirm(true);
      }
    }
  };

  React.useEffect(() => {
    fullnameRef.current.focus();
  }, []);
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
            ref={fullnameRef}
            onChange={onChange}
            onBlur={onBlur}
            required
          />
          {invalidFullname && <span>*{errorMessage.fullname}</span>}
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
            onChange={onChange}
            onBlur={onBlur}
            required
          />
          {invalidUsername && <span>*{errorMessage.username}</span>}
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
                checked
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
            type="email"
            name="email"
            id="email"
            // ref={emailRef}
            onChange={onChange}
            onBlur={onBlur}
            required
          />
          {invalidEmail && <span>*{errorMessage.email}</span>}
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
            onBlur={onBlur}
            required
          />
          {invalidPassword && <span>*{errorMessage.password}</span>}
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
            onBlur={onBlur}
            required
          />
          {invalidConfirm && <span>*{errorMessage.confirmPassword}</span>}
        </div>
        <div
          className={styles.modal__container__form__groupInput__buttonContainer}
        >
          <button onClick={() => setGroupInput(1)}>Quay lại</button>
          <input
            type="submit"
            value="Đăng ký"
            invalid={(
              invalidFullname ||
              invalidUsername ||
              invalidEmail ||
              invalidPassword ||
              invalidConfirm
            ).toString()}
          />
        </div>
      </div>
    </form>
  );
};
export default ModalAuth;
