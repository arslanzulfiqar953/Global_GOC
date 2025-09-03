import React, { useState } from "react";
import { Link } from 'react-router-dom'
import logo2 from "./logo2.png";




const Header = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <div className="h-[80px] bg-[#000F31] shadow-sm navbar">
        <div className="navbar-start">
          <a className="text-xl btn btn-ghost">
            <img
              src={logo2}
              alt="Logo"
              className="h-[50px]"
            />
          </a>
        </div>

        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li className="text-white text-[20px]">
              <a href="/">Home</a>
            </li>
            <li>
              <details>
                <summary className="text-white text-[20px]">Packages</summary>
                <ul className="p-2 bg-[#0055ff]">
                  <li className="text-white bg-black">
                    <a><Link to="/mehran manual">Mehran (Manual)</Link></a>
                  </li>
                  <li className="text-black bg-white">
                    <a><Link to="/alto auto">Alto (Automatic)</Link></a>
                  </li>
                  <li className="text-white bg-black">
                    <a><Link to="/japan">Alto (Manual)</Link></a>
                  </li>
                  <li className="text-black bg-white">
                    <a><Link to="/test">Driving Test Practice</Link></a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="text-white text-[20px]">
              <a href="#Who">About Us</a>
            </li>
            <li className="text-white text-[20px]">
              <a href="#locate">Location</a>
            </li>
            <li className="text-white text-[20px]">
              <a href="#footers">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {/* Button toggles the Google Form */}
          <button
            onClick={() => setShowForm(true)}
            className="text-[20px] text-white bg-red-600 rounded-[0_30px_30px_30px] btn hover:bg-red-700 transition"
          >
            Register Now
          </button>
        </div>
      </div>

      {/* Show Google Form only after button click */}
      {showForm && (
        <div className="flex flex-col justify-center items-center py-10 px-4 bg-gray-100">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScuqGzpVN3MT_41oCEXKei0-NobRv6m4dgkRQpsoWpDfTj6Ww/viewform?embedded=true"
            className="w-full h-[90vh] rounded-xl shadow-lg md:w-[90%] lg:w-[70%]"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Registration Form"
          >
            Loading…
          </iframe>

          {/* ✅ Close button */}
          <button
            onClick={() => setShowForm(false)}
            className="mt-5 py-2 px-6 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Close Form
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
