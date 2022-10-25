import * as React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/categorySlice";
import { logout } from "../redux/userSlice";
import { HTTP_STATUS } from "../redux/constants";
import Loading from "./loading";
import Logo from "../assets/images/logo.png";
import styles from "./styles/header.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  let dispatch = useDispatch();
  const sArticle = useSelector((state) => state.article.status);
  const sCategory = useSelector((state) => state.category.status);
  const sUser = useSelector((state) => state.user);
  const [loading, setLoading] = React.useState(false);

  const categories = useSelector((state) => state.category.list);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const handleMenuToggler = () => setMenuOpen((p) => !p);
  const handleSearchToggler = () => setSearchOpen((p) => !p);
  React.useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, []);
  const handleLogout = () => {
    dispatch(logout());
  };
  React.useEffect(() => {
    if (
      sArticle === HTTP_STATUS.PENDING ||
      sCategory === HTTP_STATUS.PENDING ||
      sUser.status === HTTP_STATUS.PENDING
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [sArticle, sCategory, sUser.status]);

  return (
    <div className={styles.header}>
      {loading ? <Loading /> : ""}
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

            {categories.map((data, i) =>
              data.status ? (
                <NavLink
                  key={i}
                  className={({ isActive }) =>
                    isActive ? styles[`nav__item--active`] : styles.nav__item
                  }
                  to={`/danh-muc/${data.slug}`}
                >
                  {data.title}
                  <MoreVertIcon />
                </NavLink>
              ) : (
                ""
              )
            )}
            {sUser.info ? (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles[`nav__item--active`] : styles.nav__item
                  }
                  to="/upload"
                >
                  Upload
                </NavLink>
                <button className={styles.nav__item} onMouseDown={() => handleLogout()}>
                  Đăng xuất
                </button>
              </>
            ) : (
              ""
            )}
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
              onClick={searchOpen ? "" : handleSearchToggler}
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
export default React.memo(Header);
