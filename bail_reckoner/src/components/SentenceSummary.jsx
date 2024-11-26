import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const SentenceSummary = () => {
  const data = {
    labels: ["Months Served", "Remaining"],
    datasets: [
      {
        data: [8, 2],
        backgroundColor: ["#4A90E2", "#E0E0E0"],
        hoverBackgroundColor: ["#357ABD", "#C0C0C0"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <div className="bg-white pb-0.5 rounded-lg shadow-md max-h-96 rounded-t-2xl overflow-y-hidden">
      <h2 className="text-xl font-semibold font-pops text-white bg-[#3C5DD5] text-center p-2 rounded-t-2xl mb-2">
        Sentence Served
      </h2>
      <div
        className="flex justify-center items-center relative" // Add relative positioning
        style={{ height: "200px" }}
      >
        <Pie data={data} options={options} />
        <div className="absolute top-0 left-0 text-xs ml-2">
          <p>Time served: 8 months</p>
          <p>Remaining time: 2 months</p>
        </div>
      </div>
    </div>
  );
};

export default SentenceSummary;
