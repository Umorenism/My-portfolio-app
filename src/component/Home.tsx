import About from "../pages/About";
import Contact from "../pages/Contact";
import Hero from "../pages/Hero";
import Project from "../pages/Project";
import Service from "../pages/Service";

const Home = () => {
  return (
    <div className="mt-10 min-h-screen">
      <Hero />
      <About />
      <Service />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
