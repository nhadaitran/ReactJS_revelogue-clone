import styles from "./index.module.scss";
import TextSlider from "../../components/textSlider";
import ImageSlider from "../../components/imageSlider";
import CardSlider from "../../components/cardSlider";
import BlogWidget from "../../components/blogWidget";
const Home = () => {
    return(
        <div className={styles.index}>
            <TextSlider/>
            <ImageSlider/>
            <CardSlider/>
            <BlogWidget/>
        </div>
    );
};
export default Home;
