import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authentication";
import "./navbar.css";
import { useContext, useState } from "react";
import { myContext } from "../../../context/MyContext";

export default function Navbar() {
  const { user, setUser } = useContext(myContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      alert("User logged out successfully...");
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Some internal error occurred. Please try again later.");
    }
  };

  return (
    <nav className="bg-blue-500 text-white flex justify-between items-center px-6 py-3 shadow-md">
      {/* Logo */}
      <h2
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        EMS
      </h2>

      {/* Links */}
      <ul className="flex space-x-6 text-lg font-medium">
        <li
          className="hover:text-yellow-300 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className="hover:text-yellow-300 cursor-pointer"
          onClick={() => navigate("/addEmp")}
        >
          Add New
        </li>
        <li
          className="hover:text-yellow-300 cursor-pointer"
          onClick={() => navigate("/about-us")}
        >
          About Us
        </li>
      </ul>

      {/* User dropdown */}
      <div className="relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAVgEZdN3i24u5KqiegG9MCyzQPyAgKvmMw&s"
          alt="user"
          className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />

        {dropdownOpen && (
          <ul className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg z-50">
            {user ? (
              <>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/help">Help</Link>
                </li>
              </>
            ) : (
              <>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/login">Login</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
}
