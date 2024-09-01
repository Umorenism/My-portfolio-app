const Contact = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen p-4 justify-center items-center flex ">
      <div className="container mx-auto p-4 mt-10">
        <h1 className="py-4 text-3xl md:text-4xl font-bold text-white text-center">
          Contact Me
        </h1>
        <div className="flex text-black p-4 gap-4 flex-col md:flex-row">
          <div className="md:w-1/2  text-white w-full p-2">
            <h1 className="text-3xl text-pink-700">Let's Talk</h1>
            <p className="py-2">
              I'm open to web discussing web development project or partnership
              opportunities
            </p>
            <h1 className="py-2">umorenismvic@gmail.com</h1>
            <h1 className="py-2">+7081416213</h1>
            <h1 className="py-2">123,Kaka street,Portharcourt</h1>
          </div>
          <div className="md:w-1/2 text-white  w-full p-2">
            <form action="">
              <div className="flex-col flex mt-4">
                <label htmlFor="">Name:</label>
                <input
                  type="text"
                  className="py-2 bg-slate-600 outline-none p-4 rounded-md"
                />
              </div>
              <div className="flex-col flex">
                <label htmlFor="">Email:</label>
                <input
                  type="text"
                  className="py-2 bg-slate-600 outline-none p-4 rounded-md"
                />
              </div>
              <div className="flex-col flex">
                <label htmlFor="">Message:</label>
                <textarea
                  name=""
                  id=""
                  className="h-[200px] bg-slate-600 rounded-md"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
