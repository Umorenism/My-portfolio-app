const Hero = () => {
  return (
    <section className="bg-gray-950 text-white min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-2xl md:text-3xl lg:text-6xl f font-serif mb-4 ">
        Hi, I'm <span className="text-pink-500">UMOREN VICTOR</span>
      </h1>
      <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8">
        A passionate Frontend Developer
        <br />
        Specializing in creating amazing user experiences
        <br />
        Let's build something great together!
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <a
          href="/location"
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-full text-lg transition duration-300"
        >
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-full text-lg transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
