const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Footer Logo or Title */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">My-Project</h2>
            <div className="h-1 rounded-full w-full bg-orange-600" />
            <div className="flex-col">
              <div className="py-4">
                <a className="py-4">Real-Estate</a>
              </div>
              <div className="py-4">
                <a className="py-4">Ibom Transportation</a>
              </div>
              <div className="py-4">
                {" "}
                <a className="py-4">Exchange(Web3)</a>
              </div>
              <div className="py-4">
                <a className="py-4">Agency</a>
              </div>
              <div className="py-4">
                <a className="py-4">Get-Property</a>
              </div>
              <div className="py-4">
                <a className="py-4">My-Portfolio</a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold py-2">Link</h1>
            <div className="h-1 rounded-full w-full bg-orange-600" />
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <a href="/" className="hover:underline hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:underline hover:text-orange-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/service"
                  className="hover:underline hover:text-orange-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-orange-500"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <input
                type="text"
                placeholder="send mail.."
                className="w-full bg-transparent border border-teal-50 p-2 text-white rounded-md"
              />
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 flex-col">
            <h1 className="text-2xl font-bold">Social Media</h1>

            <div className="flex gap-4 items-center py-4">
              <div>
                <a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  className="hover:text-blue-400"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-white"
                  >
                    {/* Twitter Icon SVG */}
                    <path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.494 0-.175 0-.349-.012-.523A8.348 8.348 0 0022 6.72a8.19 8.19 0 01-2.357.636 4.075 4.075 0 001.804-2.222 8.18 8.18 0 01-2.605.978 4.094 4.094 0 00-6.986 3.731 11.614 11.614 0 01-8.447-4.287 4.042 4.042 0 00-.554 2.056c0 1.419.724 2.672 1.828 3.409a4.073 4.073 0 01-1.854-.506v.05c0 1.981 1.423 3.63 3.307 4.005a4.086 4.086 0 01-1.85.07c.522 1.609 2.037 2.779 3.833 2.81a8.222 8.222 0 01-5.034 1.706c-.327 0-.651-.019-.971-.058a11.616 11.616 0 006.29 1.836"></path>
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="hover:text-blue-600"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-white"
                  >
                    {/* Facebook Icon SVG */}
                    <path d="M9 8h1.5v-.5a2.5 2.5 0 115 0V8H17v3h-1.5v7H12v-7H9V8z"></path>
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  className="hover:text-blue-700"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-white"
                  >
                    {/* LinkedIn Icon SVG */}
                    <path d="M16 8a6 6 0 00-6 6v7h4v-7a2 2 0 014 0v7h4v-7a6 6 0 00-6-6z"></path>
                    <circle cx="8" cy="8" r="4"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} MyProject. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
