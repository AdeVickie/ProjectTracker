import React from "react";
import Navbar from "./Navbar";

import Progress from "./Progress";
import AddTask from "./AddTask";

// Icon importation
import {
  IconFolderOutline,
  IconLineChartLine,
  IconMoneyEuroCircleLine,
  IconTeamLine,
  IconTimeOutline,
} from "./Icons";

function LandingPage() {
  const cardData = [
    {
      icon: <IconFolderOutline />,
      cardData: 20,
      title: "Total projects",
      btnText: "Add new project",
    },
    {
      icon: <IconTeamLine />,
      cardData: 126,
      title: "Team size",
      btnText: "Add new members",
    },
    {
      icon: <IconLineChartLine />,
      cardData: 16000,
      title: "Total revenue",
      btnText: "Add more info",
    },
    {
      icon: <IconTimeOutline />,
      cardData: 9000,
      title: "Time spent",
      btnText: "Extend period",
    },
    {
      icon: <IconMoneyEuroCircleLine />,
      cardData: 2000,
      title: "Resources",
      btnText: "Extend period",
    },
  ];

  return (
    <div className="landingPage">
      <div className="cardGrp">
        {cardData.map((element, index) => (
          <div className="cardBody" key={index}>
            <div className="cardHeadingGrp">
              <p className="cardTitle">{element.title}</p>
              <div className="cardIcon">{element.icon}</div>
            </div>

            <h1 className="cardWriteup">{element.cardData}</h1>

            <button className="cardBtn">{element.btnText}</button>
          </div>
        ))}
      </div>

      <Progress />
      <AddTask />
    </div>
  );
}

export default LandingPage;
