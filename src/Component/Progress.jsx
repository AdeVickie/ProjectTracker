import React, { PureComponent } from "react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mar",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Jun",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Sep",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Dec",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

export default function Progress() {
  const [progress, setProgress] = useState(0);
  const handleButtonClick = () => {
    if (progress < 100) {
      setProgress(progress + 5);
    }
  };

  const handleButtonReset = () => {
    setProgress(0);
  };
  const getColor = () => {
    if (progress < 50) {
      return "#ff0000";
    } else if (progress < 70) {
      return "#ffa500";
    } else {
      return "#2ecc71";
    }
  };

  const handleDelete = (progess) => {
    alert("Removed");
  };

  return (
    <>
      <div className="flex gap-10 xs:h-[40rem] md:h-[400px] flex-wrap xs:flex-col md:flex-row p-3">
        <div className=" flex-1 bg-gray-200 rounded-2xl p-3">
          <h1 className="font-bold">Product Progress</h1>
          <div className="w-[100%] h-8 bg-gray-400 rounded-full ">
            <div
              className="h-[100%] pl-2 xs:content-center text-[12px] italic transition-all duration-100 ease-in bg-green-400 rounded-full"
              style={{ width: `${progress}%`, backgroundColor: getColor() }}
            >
              progress....
            </div>
          </div>
          <div className="progressLabel mt-3 text-lg font-semibold">
            {progress}%
          </div>
          <button
            className="px-3  text-white py-2 mr-3 bg-green-500 rounded-2xl"
            onClick={handleButtonClick}
          >
            Add progess
          </button>

          <button
            className="px-3 py-2 text-white bg-orange-400 rounded-2xl"
            onClick={handleButtonReset}
          >
            Reset
          </button>
          <button
            className="ml-3 px-3 py-2 bg-red-400 rounded-2xl text-white"
            onClick={() => handleDelete(progress)}
          >
            Remove
          </button>
        </div>
        <h1 className="font-bold text-center  md:hidden">Project Statistics</h1>
        <div className="flex-1 bg-pink-400 rounded-2xl ">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              className="font-bold p-3"
              width={500}
              height={300}
              data={data}
              //   margin={{
              //     top: 50,
              //     right: 30,
              //     left: 20,
              //     bottom: 5,
              //   }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
