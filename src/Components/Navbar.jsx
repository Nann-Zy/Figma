import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); 
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen); // Toggle visibility dari dropdown profile
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen); // Toggle visibility dari dropdown product
  };

  return (
    <nav className="bg-white bg-opacity-80 fixed w-full z-10 top-0 left-0 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-1 text-left">
          <div className="text-2xl font-semibold font-lora text-gray-800">
            Toci
          </div>
        </div>

        {/* Menu di Tengah */}
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-8 items-center">
            <li>
              <a
                href="#Main"
                className="text-gray-800 hover:text-gray-600 transition duration-300"
              >
                Home
              </a>
            </li>
            <li className="relative">
              {/* Menu Product dengan Dropdown */}
              <button
                onClick={toggleProductDropdown}
                className="text-gray-800 hover:text-gray-600 transition duration-300"
              >
                Product
              </button>
              {isProductDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 px-4">
                  <ul>
                    
                    <li>
                      <a
                        href="#shoes"
                        className="block text-gray-800 hover:text-gray-600 py-2"
                      >
                        Shoes
                      </a>
                    </li>

                    <li>
                      <a
                        href="#racket"
                        className="block text-gray-800 hover:text-gray-600 py-2"
                      >
                        Racket
                      </a>
                    </li>
                    <li>
                      {/* <a
                        href="#shirt"
                        className="block text-gray-800 hover:text-gray-600 py-"
                      >
                        Shirt (Comming Soon)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#pants"
                        className="block text-gray-800 hover:text-gray-600 py-2"
                      >
                        Pants (Comming Soon)
                      </a> */}
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 transition duration-300"
              >
                Coming Soon
              </a>
            </li>
          </ul>
        </div>

        {/* Ikon Profile di Kanan */}
        <div className="flex-1 flex justify-end">
          <button
            className="text-gray-600"
            onClick={toggleProfileDropdown} // Menambahkan event onClick untuk toggle dropdown profile
          >
            <CgProfile className="text-4xl" />
          </button>

          {/* LOGIN REGIST */}
          {isProfileDropdownOpen && (
            <div className="absolute top-16 right-4 bg-white shadow-md rounded-md py-2 px-4">
              <ul>
                <li>
                  <a
                    href="#login"
                    className="block text-gray-800 hover:text-gray-600 py-2"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="#register"
                    className="block text-gray-800 hover:text-gray-600 py-2"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
