import styles from "./index.module.scss";
import TextSlider from "../../components/textSlider";
import ImageSlider from "../../components/imageSlider";
import CardSlider from "../../components/cardSlider";
import BlogWidget from "../../components/blogWidget";
import BlogPost from "../../components/blogPost";
import fakedata from "../../utils/CardSlider.json";
const Home = () => {
    return(
        <div className={styles.index}>
            <TextSlider/>
            <ImageSlider/>
            <CardSlider/>
            <BlogWidget/>
            <BlogPost data={fakedata.data} title={"Điện ảnh"}/>
            <BlogPost data={fakedata.data} title={"Âm nhạc"}/>
        </div>
    );
};
export default Home;
