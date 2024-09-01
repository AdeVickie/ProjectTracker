import React, { PureComponent } from "react";
import { useState } from "react";
// rechart barchart importation
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
import { db } from "../firebase-config/firebase";

// parameters
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

export default function Progress({ dbData, getDatabaseData }) {
  const [progress, setProgress] = useState(0);
  // bar progress by 5
  const handleButtonClick = () => {
    if (progress < 100) {
      setProgress(progress + 5);
    }
  };

  //button reset to zero
  const handleButtonReset = () => {
    setProgress(0);
  };

  // color if else statement
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
    <div className="progressScreenGrp">
      {/* left side of the flex box */}
      <section className=" bg-gray-200 rounded-md p-3">
        <h1 className="font-bold uppercase text-xl mb-3">Project Progress</h1>

        <div className="listOfProgress">
          {dbData.map((element, index) => (
            <div className="progressGrp" key={index}>
              <h1 className=" capitalize font-semibold">
                {element.projectName}
              </h1>

              {element.tasks.length > 1 ? (
                <p className=" text-sm">{element.tasks.length} tasks</p>
              ) : (
                <p className="text-sm">{element.tasks.length} task</p>
              )}

              <div className="progressBar">
                <div
                  className=" bg-red-500 h-5 rounded-md"
                  style={{
                    width: `${
                      (element.tasks.filter((task) => task.status === true)
                        .length /
                        element.tasks.length) *
                      100
                    }%`,
                  }}
                ></div>
              </div>

              <p>
                {(element.tasks.filter((task) => task.status === true).length /
                  element.tasks.length) *
                  100}
                %
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Right side of the flex box */}
      <section>
        <h1 className="font-bold text-center  md:hidden">Project Statistics</h1>
        <div className="chartContainer">
          <ResponsiveContainer width="100%" height="400px">
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
      </section>
    </div>
  );
}
