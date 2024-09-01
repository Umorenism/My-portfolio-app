import ProjectCard from "../component/ProjectCard";
import img from "../asset/dev.webp";
const Project = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen p-4 justify-center flex items-center ">
      <div className="container mx-auto p-4 mt-10">
        <h1 className="py-4 text-3xl md:text-4xl font-bold text-white text-center">
          My Project
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <ProjectCard
            img={img}
            title="Get Property"
            content="Mern stack"
            onReadMore={() => {}}
          />
          <ProjectCard
            img={img}
            title="IBT(Ibom Transportation)"
            content="Front-End"
            onReadMore={() => {}}
          />
          <ProjectCard
            img={img}
            title="CHAMBS"
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
            img={img}
            title="Next"
            content="Collaabration"
            onReadMore={() => {}}
          />
          <ProjectCard
            img={img}
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
