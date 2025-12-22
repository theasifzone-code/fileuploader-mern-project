import { NavLink, Link, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navabar = ({ isSignUp, setIsSignUp }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-white">
          File<span className="text-yellow-300">Upload</span>
        </h1>

        {/* Main Navigation */}
        <div className="flex gap-8">
          {token &&
            navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-white font-medium transition-all duration-300
                  hover:text-yellow-300
                  ${isActive ? "text-yellow-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-yellow-300" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}
        </div>

        {/* Auth Section */}
        <div className="flex gap-6 items-center">
          {!token ? (
            <div className="flex gap-4">
              <Link
                onClick={() => setIsSignUp(false)}
                className={`px-4 py-1 rounded-full ${isSignUp ? "text-white" :"text-purple-600" } transition-all duration-300
                ${!isSignUp ? "bg-white text-purple-600 font-bold" : ""}`}
              >
                Login
              </Link>

              <Link
                onClick={() => setIsSignUp(true)}
                className={`px-4 py-1 rounded-full ${isSignUp ? "text-purple-600" :"text-white"} transition-all duration-300
                ${isSignUp ? "bg-white text-purple-600 font-bold" : ""}`}
              >
                SignUp
              </Link>
            </div>
          ) : (
            <button
              onClick={handleClick}
              className="px-4 py-1 rounded-full bg-white text-purple-600  font-bold
              transition-all duration-300"
            >
              Logout
            </button>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navabar;
