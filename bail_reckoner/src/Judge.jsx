import React from "react";
import AccusedProfile from "./components/AccusedProfile";
import CrimeDetails from "./components/CrimeDetails";
import CrimeTimeline from "./components/CrimeTimeline";
import ProsecutionAccusedDetails from "./components/ProsecutionAccused";
import SentenceSummary from "./components/SentenceSummary";
import Timeline from "./components/Timeline";

export default function Judge() {
  return (
    <>
      <div className="w-full h-screen overflow-hidden bg-[#E7ECF6] flex flex-col items-center">
        <div className="w-full h-20 bg-[#3C5DD5] flex justify-center items-center absolute top-0 right-0">
          <img
            className="bg-[#D9D9D9] p-1 rounded-full h-10 absolute right-[260px] ml-4"
            src="/profile.png"
            alt="Bail Buddy"
          />
          <h1 className="text-black bg-[#D9D9D9] font-bold px-3 py-2 rounded-full text-sm text-center font-pops absolute right-24 ml-4">
            Justice Rohit Nair
            <br />
            J5059
          </h1>
          <img
            src="/bailbuddy.png"
            alt="Bail Buddy"
            className="absolute top-0 right-0 h-20"
          />
          <div className="w-1/2 h-14 bg-[#d9d9d9] rounded-full flex justify-center items-center">
            <h1 className="text-2xl font-pops">CASE ID: 2024/ CR-8278</h1>
          </div>
        </div>

        <div className="flex-grow pt-20 mx-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-6">
            <div className="space-y-6 max-h-screen overflow-y-auto">
              <AccusedProfile />
              <CrimeDetails />
            </div>
            <div className="space-y-6 max-h-screen overflow-y-hidden">
              <CrimeTimeline />
              <ProsecutionAccusedDetails />
            </div>
            <div className="space-y-6 max-h-screen overflow-y-auto">
              <Timeline />
              <SentenceSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
