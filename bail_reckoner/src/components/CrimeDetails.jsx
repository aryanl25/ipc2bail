import React from "react";

const CrimeDetails = () => {
  const crimes = [
    {
      crimeType: "Crime 1: Murder",
      section: "103",
      sentence: "death or life imprisonment",
      bailCriteria: "Non-bailable offense",
    },
    {
      crimeType: "Crime 2: Theft",
      section: "303",
      sentence: "3+ years / Fine / Community service",
      bailCriteria: "Bailable offense",
    },
    {
      crimeType: "Crime 3: Assault",
      section: "201",
      sentence: "up to 7 years imprisonment",
      bailCriteria: "Bailable offense",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-custom scrollbar-track-gray-custom">
      <div className="space-y-5">
        {crimes.map((crime, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg border border-gray-200 shadow-lg p-5 space-y-5"
          >
            <h3 className="text-lg -mx-5 -mt-5 font-bold mb-2 text-center bg-[#3C5DD5] text-white rounded-t-xl">
              <span className="tracking-wider">
                {crime.crimeType.split(":")[0]}
              </span>
              : {crime.crimeType.split(":")[1]}
            </h3>
            <p className="text-sm text-black mb-2">
              <span className="font-bold underline">Section of BNS:</span>{" "}
              {crime.section}
            </p>
            <p className="text-sm text-black mb-2">
              <span className="font-bold underline">Punishable sentence:</span>{" "}
              {crime.sentence}
            </p>
            <p className="text-sm text-black">
              <span className="font-bold underline">
                Bail criteria by CRPC:
              </span>{" "}
              {crime.bailCriteria}
            </p>
          </div>
        ))}
      </div>

      {/* Custom scrollbar styling */}
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #3c5dd5; /* Blue thumb color */
          border-radius: 4px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background-color: #f3f4f6; /* Light gray track color */
        }
      `}</style>
    </div>
  );
};

export default CrimeDetails;
