import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectThree, projectFive, projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="Accomplished Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="HTML Pizza Form"
          des=" Simple pizza order form using the very basic language of programming, HTML. "
          src={projectOne}
          githubLink="https://github.com/yonx44"
          websiteLink=""
        />
        <ProjectsCard
          title="Bootstrap Weather App"
          des=" Interactive weather app created using Boostrap Framework for CSS Design with API integration to get accurate and up-to-date weather information. "
          src={projectThree}
          githubLink="https://github.com/yonx44"
          websiteLink=""
        />
        <ProjectsCard
          title="Line Follower Robot"
          des=" This project used infrared sensors with Arduino as the microcontroller to navigate and follow a line. "
          src={projectSix}
          githubLink="https://github.com/yonx44"
          websiteLink=""
        />
        <ProjectsCard
          title="Portable Sensor Calibrator"
          des=" A Portable Microcontroller-Based Sensor Calibrator for Ultrasonic and Position Sensors. Served as the final research project for graduating Electronics Engineering. A portable device with a microcontroller which callibrates different positions sensors used in laboratories."
          src={projectFive}
          githubLink="https://github.com/yonx44"
          websiteLink=""
        />
      </div>
    </section>
  );
}

export default Projects