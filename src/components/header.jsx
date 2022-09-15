import * as React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import styles from "./styles/header.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const pages = [
    "Viết lách",
    "Văn học",
    "Điện ảnh",
    "Nhiếp ảnh",
    "Âm nhạc",
    "Văn hoá",
    "Mỹ thuật",
  ];
  const handleMenuToggler = () => setMenuOpen((p) => !p);
  const handleSearchToggler = () => setSearchOpen((p) => !p);
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <button
            className={styles.header__toggler}
            onClick={handleMenuToggler}
          >
            {!menuOpen ? <MenuIcon /> : <CloseIcon />}
          </button>
        </div>
        <div>
          <img className={styles.logo} src={Logo} alt="Logo" />
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? styles[`nav__item--active`] : styles.nav__item
              }
              to="/"
            >
              Trang chủ
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles[`nav__item--active`] : styles.nav__item
              }
              to="/article"
            >
              Viết lách
              <MoreVertIcon />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles[`nav__item--active`] : styles.nav__item
              }
              to="/article"
            >
              Văn học
              <MoreVertIcon />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles[`nav__item--active`] : styles.nav__item
              }
              to="/article"
            >
              Điện ảnh
              <MoreVertIcon />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles[`nav__item--active`] : styles.nav__item
              }
              to="/article"
            >
              Nhiếp ảnh
              <MoreVertIcon />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles[`nav__item--active`] : styles.nav__item
              }
              to="/article"
            >
              Âm nhạc
              <MoreVertIcon />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles[`nav__item--active`] : styles.nav__item
              }
              to="/article"
            >
              Văn hoá
              <MoreVertIcon />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles[`nav__item--active`] : styles.nav__item
              }
              to="/article"
            >
              Mỹ thuật
              <MoreVertIcon />
            </NavLink>
            <div className={styles.nav__button__login}>
              <LoginButton />
            </div>
          </nav>
        </div>
        <div>
          <button
            className={styles.search__toggler}
            onClick={handleSearchToggler}
          >
            <SearchIcon />
          </button>
          <div
            className={`${styles.search} ${
              searchOpen ? styles[`search--open`] : styles[`search--close`]
            }`}
          >
            <input
              type="text"
              className={styles.search__input}
              placeholder="Nhập nội dung cần tìm..."
              onBlur={handleSearchToggler}
            />
            <button type="submit" className={styles.search__submit}>
              <SearchIcon />
            </button>
          </div>
          <div className={styles.header__button__login}>
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginButton = () => {
  return <button className={styles.button}>Login</button>;
};
export default Header;
