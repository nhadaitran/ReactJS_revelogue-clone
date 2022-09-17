import styles from "./styles/breadcrumb.module.scss";

const Breadcrumbs = () => {
  return (
    <nav className={styles.container}>
      <ol>
        <li> Home </li>
        <li> Article </li>
      </ol>
    </nav>
  );
};
export default Breadcrumbs;