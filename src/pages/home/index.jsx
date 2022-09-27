import styles from "./index.module.scss";
import TextSlider from "../../components/textSlider";
import ImageSlider from "../../components/imageSlider";
import CardSlider from "../../components/cardSlider";
const Home = () => {
    return(
        <div className={styles.index}>
            <TextSlider/>
            <ImageSlider/>
            <CardSlider/>
        </div>
    );
};
export default Home;
