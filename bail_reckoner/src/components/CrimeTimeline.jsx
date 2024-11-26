import React from "react";

const CrimeTimeline = () => {
  const timelineEvents = [
    {
      time: "9:30 am - 9:35 am",
      event: "Accused entered the residence",
    },
    {
      time: "9:35 am - 9:37 am",
      event: "Confronted the victim",
    },
    {
      time: "9:37 am - 10:00 am",
      event: "Occurrence of crime",
    },
  ];

  return (
    <div className="bg-white pb-0.5 rounded-lg shadow-md rounded-t-2xl">
      <h2 className="text-xl font-semibold font-pops text-white bg-[#3C5DD5] text-center p-2 rounded-t-2xl mb-4">
        Crime Timeline
      </h2>
      <div className="relative">
        <div className="absolute inset-0 w-3 mx-2 bg-blue-600 rounded-xl"></div>
        <div className="pl-6">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex space-x-5 mx-1 items-center mb-6">
              <div className="flex-1 text-sm text-black font-semibold font-pops">
                <div className="bg-[#D9D9D9] text-black px-4 py-2 rounded-md text-sm font-semibold font-pops">
                  {event.event}
                </div>
              </div>
              <div className="relative flex-shrink-0 text-center">
                <div className="bg-[#D9D9D9] text-black px-4 py-2 rounded-md text-sm font-semibold font-pops">
                  {event.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrimeTimeline;
