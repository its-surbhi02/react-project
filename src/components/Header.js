import { useState , useContext } from "react";
import { Link } from "react-router";
import userContext from "../utils/userContext";

const Title = () => (
  <a href="/">
    <h1 className="text-3xl font-bold text-[#898ac4] hover:text-[#a2aadb] transition">
      BiteSome
    </h1>
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {user} = useContext(userContext);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#fff2e0] shadow-md">
      <Title />
      <nav className="flex items-center space-x-6">
  <ul className="flex space-x-6 text-lg font-medium text-[#898ac4]">
    <li>
      <Link to="/" className="hover:text-[#a2aadb] transition">
        Home
      </Link>
    </li>
    <li>
      <Link to="/about" className="hover:text-[#a2aadb] transition">
        About Us
      </Link>
    </li>
    <li>
      <Link to="/contact" className="hover:text-[#a2aadb] transition">
        Contact Us
      </Link>
    </li>
    <li>
      <Link to="/cart" className="hover:text-[#a2aadb] transition">
        Cart
      </Link>
    </li>
    <li>
      <Link to="/instamart" className="hover:text-[#a2aadb] transition">
        Instamart
      </Link>
    </li>
  </ul>
  <span>{user.name}</span>
  {isLoggedIn ? (
    <button
      onClick={() => setIsLoggedIn(false)}
      className="px-4 py-2 bg-[#898ac4] text-white rounded-xl hover:bg-[#a2aadb] transition"
    >
      Logout
    </button>
  ) : (
    <button
      onClick={() => setIsLoggedIn(true)}
      className="px-4 py-2 bg-[#898ac4] text-white rounded-xl hover:bg-[#a2aadb] transition"
    >
      Login
    </button>
  )}
</nav>

    </header>
  );
};

export default Header;
