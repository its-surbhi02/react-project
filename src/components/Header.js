import { Link } from "react-router";


const Title = () => (
  <a href="/">
    <h1 className="text-3xl font-bold text-[#898ac4] hover:text-[#a2aadb] transition">
      BiteSome
    </h1>
  </a>
);

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#fff2e0] shadow-md">
      <Title />
      <nav>
        <ul className="flex space-x-6 text-lg font-medium text-[#898ac4]">
          <li>
            <Link to="/" className="hover:text-[#a2aadb] transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#a2aadb] transition">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#a2aadb] transition">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-[#a2aadb] transition">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;