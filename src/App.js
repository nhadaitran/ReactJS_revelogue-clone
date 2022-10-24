import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import AppLayout from "./layouts/layout";
import Article from "./pages/article/index";
import Category from "./pages/category/index";
import Home from "./pages/home/index";
import ModalAuth from './components/modalAuth';
import UploadArticle from './pages/uploadArticle/index';
import ScrollButton from './components/scrollButton';
// eslint-disable-next-line no-unused-vars
import styles from "./styles/index.scss";
function App() {
  const [openAuth, setOpenAuth] = React.useState(false);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppLayout>
            {openAuth && <ModalAuth closeAuth={setOpenAuth} />}
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route path="article" element={<Article openAuth={setOpenAuth} />} /> */}
              <Route exact path="bai-viet/:slug" element={<Article openAuth={setOpenAuth} />} />
              <Route exact path="danh-muc/:slug" element={<Category />} />
              <Route exact path="upload" element={<UploadArticle />} />
            </Routes>
            <ScrollButton />
          </AppLayout>
        </PersistGate>
      </Provider>
    </BrowserRouter>

    // <Route path="department">
    //   <Route index element={<Department />} />
    //   <Route path=":departmentID" element={<DepartmentDetail />} />
    // </Route>
    //     <Route path="thong-tin-ca-nhan">
    //       <Route index element={<Profile />} />
    //       <Route path=":userID" element={<UserDetail />} />
    //     </Route>
  );
}

export default App;
