import { Link } from "react-router";
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about"> About us</Link></li>
          
         
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;