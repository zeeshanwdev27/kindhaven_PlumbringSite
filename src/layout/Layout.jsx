import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
// import Footer from "../components/Footer/Footer.jsx";

function Layout() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen">
          <Outlet />
      </div>

      <Footer/>
    </>
  );
}

export default Layout;