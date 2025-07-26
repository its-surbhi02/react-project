import { useState , useContext } from "react";
import { Link } from "react-router";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <h1 className="text-3xl font-bold text-[#898ac4] hover:text-[#a2aadb] transition">
      BiteSome
    </h1>
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useContext(userContext);

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);

  return (
    <header className="bg-[#fff2e0] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Title */}
          <Title />

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#898ac4] focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 text-lg font-medium text-[#898ac4]">
              <li><Link to="/" className="hover:text-[#a2aadb] transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#a2aadb] transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#a2aadb] transition">Contact Us</Link></li>
              <li><Link to="/instamart" className="hover:text-[#a2aadb] transition">Instamart</Link></li>
              <li><Link to="/cart" className="hover:text-[#a2aadb] transition">Cart - {cartItems.length} items</Link></li>
            </ul>

            <span className="text-[#898ac4]">{user.name}</span>
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
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2">
            <ul className="space-y-3 text-lg font-medium text-[#898ac4]">
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
              <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link></li>
              <li><Link to="/instamart" onClick={() => setMenuOpen(false)}>Instamart</Link></li>
              <li><span>{user.name}</span></li>
              <li>
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      setMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 bg-[#898ac4] text-white rounded-xl hover:bg-[#a2aadb] transition"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsLoggedIn(true);
                      setMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 bg-[#898ac4] text-white rounded-xl hover:bg-[#a2aadb] transition"
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
