import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navabar = ({ isSignUp, setIsSignUp }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">

        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide text-white">
          File<span className="text-yellow-300">Upload</span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {token &&
            navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-white font-medium transition-all duration-300 hover:text-yellow-300
                  ${
                    isActive
                      ? "text-yellow-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-yellow-300"
                      : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex gap-6 items-center">
          {!token ? (
            <div className="flex gap-4">
              <Link
                onClick={() => setIsSignUp(false)}
                className={`px-4 py-1 rounded-full transition-all duration-300 ${
                  !isSignUp
                    ? "bg-white text-purple-600 font-bold"
                    : "text-white"
                }`}
              >
                Login
              </Link>

              <Link
                onClick={() => setIsSignUp(true)}
                className={`px-4 py-1 rounded-full transition-all duration-300 ${
                  isSignUp
                    ? "bg-white text-purple-600 font-bold"
                    : "text-white"
                }`}
              >
                SignUp
              </Link>
            </div>
          ) : (
            <button
              onClick={handleClick}
              className="px-4 py-1 rounded-full bg-white text-purple-600 font-bold transition-all duration-300"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {openMenu && (
        <div className="md:hidden bg-black/40 backdrop-blur-xl border-t border-white/20 p-6 space-y-6">

          {/* Links */}
          {token && (
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    `text-white text-lg font-medium transition-all ${
                      isActive ? "text-yellow-300" : "hover:text-yellow-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          )}

          {/* Auth */}
          <div className="flex flex-col gap-4">
            {!token ? (
              <>
                <button
                  onClick={() => {
                    setIsSignUp(false);
                    setOpenMenu(false);
                  }}
                  className="bg-white text-purple-600 font-bold py-2 rounded-full"
                >
                  Login
                </button>

                <button
                  onClick={() => {
                    setIsSignUp(true);
                    setOpenMenu(false);
                  }}
                  className="bg-yellow-300 text-purple-700 font-bold py-2 rounded-full"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  handleClick();
                  setOpenMenu(false);
                }}
                className="bg-white text-purple-600 font-bold py-2 rounded-full"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navabar;
