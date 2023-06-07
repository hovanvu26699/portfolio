import IMG_Project1 from "../../assets/IMG_Project1.png";
import IC_Arrow1 from "../../assets/IC_ArrowR.png";
import "./_project.scss";

const listPro = [
  {
    id: 1,
    img: "../../assets/IMG_Project1.png",
    name: "Nombre del Proyecto",
    decs: "Breve descripcion del proyecto, amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    img: "../../assets/IMG_Project1.png",
    name: "Nombre del Proyecto",
    decs: "Breve descripcion del proyecto, amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 3,
    img: "../../assets/IMG_Project1.png",
    name: "Nombre del Proyecto",
    decs: "Breve descripcion del proyecto, amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const Project = () => {
  return (
    <div className="projectContainer">
      {listPro.map((item) => {
        return (
          <div className="aProject" key={item.id}>
            <div className="boxImgProject">
              <img src={IMG_Project1} alt="image" />
            </div>
            <div className="projectContent">
              <h2 className="projectName">{item.name}</h2>
              <p className="projectDecs">{item.decs}</p>
              <a>
                <span>Details</span>
                <img src={IC_Arrow1} alt="arrow" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
