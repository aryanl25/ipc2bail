import React from "react";

const Timeline = () => {
  const events = [
    {
      date: "1st Aug '24",
      description: "FIR submitted",
      link: "http://example.com/fir",
    },
    {
      date: "14th Aug '24",
      description: "Chargesheet submitted.",
      link: "http://example.com/chargesheet",
    },
    {
      date: "30th Aug '24",
      description: "Applied for Bail",
      link: "http://example.com/bail",
    },
    {
      date: "5th Sept '24",
      description: "Evidence submitted to court.",
      link: "http://example.com/evidence",
    },
    { date: "TBA", description: "Date of Hearing", link: null },
  ];

  return (
    <div className="bg-white pb-0.5 rounded-lg shadow-md max-h-96 rounded-t-2xl overflow-y-hidden">
      <h2 className="text-xl font-semibold font-pops text-white bg-[#3C5DD5] text-center p-2 rounded-t-2xl mb-2">
        Case Timeline
      </h2>
      <div className="flex justify-center items-center mt-5">
        <div className="w-1/2 bg-blue-600 h-2 rounded-xl"></div>
      </div>
      <div className="flex flex-col items-center relative">
        <div className="absolute w-0.5 h-full bg-[#0C0B0B] left-1/2 transform -translate-x-1/2"></div>
        {events.map((event, index) => (
          <div key={index} className="flex items-center w-full">
            <div className="w-1/2 flex justify-end pr-4">
              <div
                className={`text-black p-2 rounded-lg ${
                  event.date === "TBA" ? "text-red-500" : ""
                }`}
              >
                {event.date}
              </div>
            </div>
            <div className="w-1/2 flex justify-start pl-4">
              <div
                className={`p-2 rounded-lg ${
                  event.date === "TBA" ? "text-red-500" : "text-black"
                }`}
              >
                {event.description}
                {event.link && (
                  <div className="-mt-2">
                    <a
                      href={event.link}
                      className="text-blue-500 text-xs underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Details
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mb-5">
        <div className="w-1/2 bg-blue-600 h-2 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Timeline;
