import React from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/otp");
  };

  return (
    <>
      <div className="w-full h-screen bg-[#E7ECF6] flex flex-col justify-center items-center">
        <div className="w-full h-20 bg-[#3C5DD5] flex justify-center items-center absolute top-0 right-0">
          <img
            src="/bailbuddy.png"
            alt="Bail Buddy"
            className="absolute top-0 right-0 h-20"
          />
          <div className="w-2/3 h-14 bg-[#d9d9d9] rounded-full flex justify-center items-center">
            <h1 className="text-2xl font-pops">
              BailBuddy Bail Reckoner | Login
            </h1>
          </div>
        </div>
        <div className="w-[850px] h-[600px] mt-10 bg-blue-46 rounded-[40px] relative font-pops">
          <div className="w-full h-16 bg-[#3C5DD5] rounded-t-[40px] flex justify-center absolute top-0 left-1/2 transform -translate-x-1/2"></div>
          <div className="w-[440px] h-[400px] bg-white rounded-[20px] flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col">
              <h1 className="text-black font-semibold text-2xl mb-4">
                Log in to your account
              </h1>

              <div className="mb-4">
                <label
                  htmlFor="userId"
                  className="text-base text-black block mb-2"
                >
                  User ID
                </label>
                <input
                  type="text"
                  id="userId"
                  placeholder="J/A/P_NNNN NNNN NNNN"
                  className="w-[300px] h-10 px-3 py-2 border border-gray-300 rounded-md text-placeholder-custom"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="caseId"
                  className="text-base text-black block mb-2"
                >
                  Case ID
                </label>
                <input
                  type="text"
                  id="caseId"
                  placeholder="Enter your Case Number"
                  className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md text-placeholder-custom"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact"
                  className="text-base text-black block mb-2"
                >
                  Phone Number / Email ID
                </label>
                <input
                  type="text"
                  id="contact"
                  placeholder="Enter Ph. No. or Email ID"
                  className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md text-placeholder-custom"
                />
              </div>

              <button
                onClick={handleClick}
                className="w-full h-10 bg-[#3C5DD5] text-white rounded-md font-pops"
              >
                Login now
              </button>
            </div>
          </div>
          <div className="w-full h-16 bg-[#0077B6] rounded-b-[40px] flex justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
    </>
  );
}
