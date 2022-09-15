import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/layout";
import Article from "./pages/article/index";
import Home from "./pages/home/index";
// eslint-disable-next-line no-unused-vars
import styles from "./styles/index.scss";
function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="article" element={<Article />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>

    //     <Route path="department">
    //       <Route index element={<Department />} />
    //       <Route path=":departmentID" element={<DepartmentDetail />} />
    //     </Route>
    //     <Route path="thong-tin-ca-nhan">
    //       <Route index element={<Profile />} />
    //       <Route path=":userID" element={<UserDetail />} />
    //     </Route>
  );
}

export default App;
