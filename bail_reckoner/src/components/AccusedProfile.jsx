import React, { useState } from "react";

const AccusedProfile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-md rounded-t-2xl overflow-hidden">
      <h2 className="text-xl font-semibold font-pops text-white bg-[#3C5DD5] text-center p-2 rounded-t-2xl">
        Accused Profile
      </h2>
      <div className="flex my-2">
        <div className="w-1/4">
          <div className="h-40 w-36 rounded-md ">
            <img
              src="/person.png"
              alt="Accused Profile"
              className="w-[400px] h-[125%] -mt-2 object-cover rounded-md"
            />
          </div>
        </div>
        <div className="w-3/4 ml-10 space-y-0.5 my-auto font-pops">
          <p>
            <strong>Name:</strong> XYZ
          </p>
          <p>
            <strong>Age:</strong> 34
          </p>
          <p>
            <strong>Address:</strong> Pune-411038
          </p>
          <p>
            <strong>DOB: </strong>24/04/1990
          </p>
          <p>
            <strong>Sex: </strong>Male
          </p>
          <p>
            <strong>Status:</strong> Married
          </p>
        </div>
        <div className="mr-4 my-auto">
          <button
            className="flex items-center text-gray-600 hover:text-blue-500 underline underline-offset-3"
            onClick={handleDropdownClick}
          >
            Documents
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 mt-1 ml-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="relative top-0 right-0 bg-white rounded-md shadow-md mt-2">
              <ul className="p-2 text-xs">
                <li className="text-blue-500 cursor-pointer whitespace-nowrap">
                  Educational Background
                </li>
                <li className="text-blue-500 cursor-pointer whitespace-nowrap">
                  Medical Background
                </li>
                <li className="text-blue-500 cursor-pointer whitespace-nowrap">
                  Employment Background
                </li>
                <li className="text-blue-500 cursor-pointer whitespace-nowrap">
                  Financial Background
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccusedProfile;
