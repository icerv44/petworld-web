import React, { useState } from "react";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative inline-block text-left pt-[20px]">
        <button
          type="button"
          className="inline-flex justify-center w-[200px] h-[40px] rounded-md border-gray-300 shadow-sm 
        px-4 py-2 bg-[#644DE7] text-sm font-medium text-gray-700 text-white hover:bg-gray-50 focus:outline-none "
          id="menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          สัตว์ทั้งหมด
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-[6px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            className="absolute right-0 w-[200px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Account settings
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Support
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                License
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DropDown;
