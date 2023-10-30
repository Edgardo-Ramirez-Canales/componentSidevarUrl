import React, { useState } from 'react';
import LeftIcon from '../Icons/LeftIcon';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        id="dropdownNavbarLink"
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-black-900 rounded hover:bg-black-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black md:dark:hover:text-blue-500 dark:focus:text-black dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      >
        John Doe
        <span className="flex items-center ml-2">
          <LeftIcon />
        </span>
      </button>
      {isOpen && (
        <div
          id="dropdownNavbar"
          className="relative z-10 font-normal bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul className="absolute top-0 right-0 py-2 text-sm text-gray-700 dark:text-gray-400">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-600 dark:hover:text-black">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-600 dark:hover:text-black">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-600 dark:hover:text-black">
                Earnings
              </a>
            </li>
          </ul>
        </div>

      )}
    </div>
  );
};

export default Dropdown;
