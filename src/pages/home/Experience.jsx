import Hello from "../../components/hello/Hello";
import ListCompany from "../../components/listCompany/ListCompany";
import Project from "../../components/project/Project";

import "./_experience.scss";
const Experience = () => {
  return (
    <div className="exContainer">
      <section className="hello">
        <Hello />
      </section>
      <section className="experience">
        <h3 className="titleSection">Experience</h3>
        <ListCompany />
      </section>
      <section className="project">
        <h3 className="titleSection">Project</h3>
        <Project />
      </section>
    </div>
  );
};

export default Experience;
