import Header from "./header";
import Footer from "./footer";
import Hero from "./hero";
const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      <Hero />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
