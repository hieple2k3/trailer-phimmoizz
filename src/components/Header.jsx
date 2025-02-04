import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="p-4 flex justify-between  fixed top-0 left-0 w-full z-[9999]  bg-black">
      <div className="flex items-center gap-8">
        <h1 className="text-[30px] uppercase text-blue-700 font-bold">Phimmoizz</h1>
        <nav className="hidden md:flex items-center space-x-5">
          <a href="#" className="hover:text-blue-700">
            Home
          </a>
          <a href="#" className="hover:text-blue-700">
            About
          </a>
          <a href="#" className="hover:text-blue-700">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-5">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 p-2 text-black rounded-xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-blue-700 text-white px-3 py-1 rounded-lg"
          onClick={() => onSearch(search)}
        >
          <FontAwesomeIcon icon={faSearch} />
        
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;