// import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/layout";
// import Index from "./pages/index";
import Article from "./pages/article/index";
// eslint-disable-next-line no-unused-vars
import styles from "./styles/index.scss";
function App() {
  return (
    <AppLayout>
      <Article/>
    {/* <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="doctor">
        <Route index element={<Doctor />} />
        <Route path=":doctorID" element={<DoctorDetail />} />
      </Route>
      <Route path="cam-nang">
        <Route index element={<HandBook />} />
      </Route>
      <Route path="department">
        <Route index element={<Department />} />
        <Route path=":departmentID" element={<DepartmentDetail />} />
      </Route>
      <Route path="thong-tin-ca-nhan">
        <Route index element={<Profile />} />
        <Route path=":userID" element={<UserDetail />} />
      </Route>
      <Route path="historyBooking">
        <Route index element={<HisotoryBooking />} />
        <Route path=":maDL" element={<BookingDetail />} />
      </Route>
      <Route exact path="/hospital" element={<Hospital />} />
      <Route exact path="/change-password" element={<ChangePassword />} />

      <Route exact path="/booking" element={<Booking />} />
      <Route exact path="/search" element={<Search />} />
      <Route exact path="/ho-so-suc-khoe" element={<HistoryMedical />} />
      <Route exact path="/404" element={<PageNotFound />} />
      <Route exact path="/verify-booking/:token&:MaDL" element={<VerifyBooking />} />
    </Routes> */}
  </AppLayout>
  );
}

export default App;
