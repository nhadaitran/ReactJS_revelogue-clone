import styles from "./index.module.scss";
import TextSlider from "../../components/textSlider";
import ImageSlider from "../../components/imageSlider";
const Home = () => {
    return(
        <div className={styles.index}>
            <TextSlider/>
            <ImageSlider/>
        </div>
    );
};
export default Home;
