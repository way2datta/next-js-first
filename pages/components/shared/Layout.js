import Header from "./Header";
import NavBar from "./NavBar";

const Layout = props => (
    <div className="Layout">
      <Header />
      <div className="Content">
        {props.children}
      </div>
      <NavBar />
    </div>
  );
  
  export default Layout;
