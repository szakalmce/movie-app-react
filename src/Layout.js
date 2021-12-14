import react from "react";
import AppBottomNavbar from "./components/organisms/AppBottomNavbar";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <AppBottomNavbar />
      <Footer />
    </div>
  );
};

export default Layout;
