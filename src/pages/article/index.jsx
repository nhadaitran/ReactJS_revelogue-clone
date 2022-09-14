import styles from "./index.module.scss";
import NewArticle from "../../components/newArticle";
import MainArticle from "../../components/mainArticle";
const Article = () => {
    return(
        <div className={styles.index}>
            <MainArticle/>
            <NewArticle/>
        </div>
    );
};
export default Article;
