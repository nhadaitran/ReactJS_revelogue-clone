import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import Loading from "../../components/loading";
import { getHomes } from "../../redux/articleSlice";
const TextSlider = React.lazy(() => import("../../components/textSlider"));
const ImageSlider = React.lazy(() => import("../../components/imageSlider"));
const CardSlider = React.lazy(() => import("../../components/cardSlider"));
const BlogWidget = React.lazy(() => import("../../components/blogWidget"));
const BlogPost = React.lazy(() => import("../../components/blogPost"));
const Home = () => {
  let dispatch = useDispatch();
  const home = useSelector((state) => state.article);
  const data = home.listHome[0];
  React.useEffect(() => {
    home.homeStatus === null && dispatch(getHomes());
  }, [dispatch, home.homeStatus]);
  return (
    <>
      <React.Suspense fallback={<Loading />}>
        {data && (
          <div className={styles.index}>
            <TextSlider data={data.trending} />
            <ImageSlider data={data.newest} />
            <CardSlider data={data.trending2} />
            <BlogWidget data={data.newestL} />
            <BlogPost data={data.newestC} title={"Điện ảnh"} />
            <BlogPost data={data.newestM} title={"Âm nhạc"} />
          </div>
        )}
      </React.Suspense>
    </>
  );
};
export default Home;
