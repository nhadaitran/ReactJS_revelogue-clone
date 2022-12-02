import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

// Util
import { StoreContext } from "./utils/store";

// Layout
import AppLayout from "./layouts/layout";

// Page
import Article from "./pages/article/index";
import Category from "./pages/category/index";
import Home from "./pages/home/index";
import AdminArticle from "./pages/adminArticle/index";
import UploadArticle from "./pages/uploadArticle/index";
import StatusArticle from "./pages/statusArticle/index";
import Admin from "./pages/admin/index";

// Error
import NotFound from "./pages/error/notfound/index";

// Component
import ScrollButton from "./components/scrollButton";
import ModalAuth from "./components/modalAuth";
import ModalPreview from "./components/modalPreview";
import ModalAlert from "./components/modalAlert";

// Style // eslint-disable-next-line no-unused-vars
import styles from "./styles/index.scss";

function App() {
  const value = React.useContext(StoreContext);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppLayout>
            {value.auth[0] && <ModalAuth />}
            {value.preview[0] !== null && <ModalPreview />}
            {value.alert[0] !== null && <ModalAlert />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="article" element={<Article />} />
              <Route path="bai-viet/:slug" element={<Article />} />
              <Route path="danh-muc/:slug" element={<Category />} />
              <Route path="danh-muc/:slug/:subSlug" element={<Category />} />
              <Route
                path="danh-muc/:slug/:subSlug/:subSubSlug"
                element={<Category />}
              />
              <Route path="admin">
                <Route index element={<Admin />} />
                <Route path="article">
                  <Route index element={<AdminArticle />} />
                  <Route path="upload" element={<UploadArticle />} />
                  <Route path="status" element={<StatusArticle />} />
                </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ScrollButton />
          </AppLayout>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
