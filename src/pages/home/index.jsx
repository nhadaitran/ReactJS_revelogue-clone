import styles from "./index.module.scss";
import TextSlider from "../../components/textSlider";
const Home = () => {
    return(
        <div className={styles.index}>
            <TextSlider/>
        </div>
    );
};
export default Home;
