import ProjectCard from "../component/ProjectCard";
import img from "../asset/dev.webp";
import img2 from "../asset/house.png";
import img3 from "../asset/bus.png";
import img4 from "../asset/interior.png.jpg";
import img5 from "../asset/reform.png";
const Project = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen p-4 justify-center flex items-center ">
      <div className="container mx-auto p-4 mt-10">
        <h1 className="py-4 text-3xl md:text-4xl font-bold text-white text-center">
          My Project
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <ProjectCard
            img={img2}
            title="Get Property"
            content="Mern stack"
            onReadMore={() => {}}
          />
          <ProjectCard
            img={img3}
            title="IBT(Ibom Transportation)"
            content="Front-End"
            onReadMore={() => {}}
          />
          <ProjectCard
            img={img}
            title="Agency"
            content="Front-End"
            onReadMore={() => {}}
          />
          <ProjectCard
            img={img}
            title="Porfolio"
            content="Front-End"
            onReadMore={() => {}}
          />
          <ProjectCard
            img={img4}
            title="Real-Estate"
            content="Collabration"
            onReadMore={() => {}}
          />
          <ProjectCard
            img={img5}
            title="Reform7"
            content="Front-End"
            onReadMore={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
