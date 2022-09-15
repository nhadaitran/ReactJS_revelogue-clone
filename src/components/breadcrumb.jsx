import styles from "./styles/breadcrumb.module.scss";

const Breadcrumbs = () => {
  return (
    <nav className={styles.container}>
      <ol>
        <li> Trang chủ </li>
        <li> Article </li>
      </ol>
    </nav>
  );
};
export default Breadcrumbs;