import Link from 'next/link'
const headerStyle = {
    // backgroundColor: "blue",
    // color: "white",
    // width: "100%",
    // height: "50px"
  };
  
  const Header = () => (
    <div className="Header" style={headerStyle}>
      <Link href="/">S3 Browser</Link>
    </div>
  );
  
  export default Header;