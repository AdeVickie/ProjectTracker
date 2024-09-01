import Progress from "./Progress";

// Icon importation
import {
  IconFolderOutline,
  IconLineChartLine,
  IconMoneyEuroCircleLine,
  IconTeamLine,
  IconTimeOutline,
  IconBxsPlusCircle,
  IconCalendarTwo,
  IconCheck2,
} from "./Icons";

function LandingPage({ dbData, getDatabaseData }) {
  const cardData = [
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
        <div className="cardBody">
          <div className="cardHeadingGrp">
            <p className="cardTitle">Total projects</p>
            <div className="cardIcon">
              <IconFolderOutline />
            </div>
          </div>

          <h1 className="cardWriteup">{dbData.length}</h1>

          <button className="cardBtn">Add new project</button>
        </div>

        <div className="cardBody">
          <div className="cardHeadingGrp">
            <p className="cardTitle">Team size</p>
            <div className="cardIcon">
              <IconFolderOutline />
            </div>
          </div>

          <h1 className="cardWriteup">{dbData.length}</h1>

          <button className="cardBtn">Add new member</button>
        </div>

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

      <Progress dbData={dbData} getDatabaseData={getDatabaseData} />

      <div className="addTaskScreenGrp">
        <div className="addTaskContainer">
          <p className="addTaskHeading">
            Juray keeps your most important tasks in one list. Add your most.
            <a href="/">
              <span>Learn more</span>
            </a>
          </p>
          <p className="text-center">
            <button className="addTaskIcon bg-gray-100">
              <IconCheck2 className="text-lg text-gray-400 shadow-xl" />
            </button>
          </p>
          <p className="text-center group">
            <button className=" addTaskBtn bg-blue-300 hover:bg-blue-500">
              <IconBxsPlusCircle className="addTaskBtnIcon" />
              Add Task
            </button>
          </p>
        </div>

        <div className="addTaskContainer">
          <p className="addTaskHeading">
            Juray keeps your most important tasks in one list. Add your most.
            <a href="/">
              <span>Learn more</span>
            </a>
          </p>
          <p className="text-center">
            <button className=" bg-gray-100 mb-5 addTaskIcon">
              <IconCalendarTwo className="text-lg text-gray-400 shadow-xl" />
            </button>
          </p>
          <p className="text-center group">
            <button className="addTaskBtn bg-pink-300 rounded hover:bg-pink-500  group-hover:text-slate-200">
              <IconBxsPlusCircle className="addTaskBtnIcon" />
              Add Caldendar Integration
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
