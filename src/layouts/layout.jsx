import Header from '../components/header';
import Footer from '../components/footer';

const AppLayout = ({ children }) => {
  return <div>
    <Header />
    {children}
    <Footer />
  </div>
};

export default AppLayout;