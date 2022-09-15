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
              to="/"
            >
              Văn học
              <MoreVertIcon />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles[`nav__item--active`] : styles.nav__item
              }
              to="/"
            >
              Điện ảnh
              <MoreVertIcon />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles[`nav__item--active`] : styles.nav__item
              }
              to="/"
            >
              Nhiếp ảnh
              <MoreVertIcon />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles[`nav__item--active`] : styles.nav__item
              }
              to="/"
            >
              Âm nhạc
              <MoreVertIcon />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles[`nav__item--active`] : styles.nav__item
              }
              to="/"
            >
              Văn hoá
              <MoreVertIcon />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles[`nav__item--active`] : styles.nav__item
              }
              to="/"
            >
              Mỹ thuật
              <MoreVertIcon />
            </NavLink>
          </nav>
        </div>
        <div>
          <div className={styles.search}>
            <input
              type="text"
              className={`${styles.search__input} ${
                searchOpen
                  ? styles[`search__input--open`]
                  : styles[`search__input`]
              }`}
              placeholder="Nhập nội dung cần tìm..."
              onBlur={handleSearchToggler}
            />
            <button
              type="submit"
              className={`${styles.search__submit} ${
                searchOpen
                  ? styles[`search__submit`]
                  : styles[`search__submit--close`]
              }`}
              onClick={handleSearchToggler}
            >
              <SearchIcon />
            </button>
          </div>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

const Calendar = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return (
    <div className={styles.calendar}>
      <div>
        <p>{date}</p>
      </div>
      <div>
        <p>TH{month}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};
export default Header;
