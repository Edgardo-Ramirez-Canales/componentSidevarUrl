"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SearchIcon from '@/app/components/Icons/SearchIcon';
import NotificationIcon from '@/app/components/Icons/NotificationIcon';
import QuestionIcon from '@/app/components/Icons/QuestionIcon';
import Dropdown from '@/app/components/Dropdown/Dropdown';
import MenuIcon from '@/app/components/Icons/MenuIcon';

const Navbar = () => {
  const [isOpenSmallScreen, setOpenSamallScreen] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth <= 768) {
        setOpenSamallScreen(true);
      } else {
        setOpenSamallScreen(false);
      }
    };
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  return (
    <nav className="bg-white border-white-200">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
        <div className="items-center justify-start hidden md:flex w-3/4">
          <div className="flex items-center">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              width={64}
              height={32}
              className="h-8"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Yip</span>
          </div>
          <div className="relative hidden md:block w-2/4 ml-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-3 pl-12 text-sm text-black-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-gray-400 dark:placeholder-black-200 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="items-center justify-end hidden md:flex w-1/4">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-black-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700">
            <li>
              <NotificationIcon />
            </li>
            <li>
              <QuestionIcon />
            </li>
            <li>
              <Dropdown />
            </li>
          </ul>
        </div>
        {isOpenSmallScreen ? (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-start">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                width={64}
                height={32}
                className="h-8"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Yip</span>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
                //onClick={}
              >
                <SearchIcon />
                <span className="sr-only">Search</span>
              </button>
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                //onClick={}
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
