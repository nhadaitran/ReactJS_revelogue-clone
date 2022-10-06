import Header from '../components/header';
import Footer from '../components/footer';
import ModalAuth from '../components/modalAuth';

const AppLayout = ({ children }) => {
  return <>
    <Header />
    {/* <ModalAuth/> */}
    {children}
    <Footer />
  </>
};

export default AppLayout;