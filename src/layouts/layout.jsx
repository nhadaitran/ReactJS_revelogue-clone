import Header from '../components/header';
import Footer from '../components/footer';

const AppLayout = ({ children }) => {
  return <>
    <Header />
    {children}
    <Footer />
  </>
};

export default AppLayout;