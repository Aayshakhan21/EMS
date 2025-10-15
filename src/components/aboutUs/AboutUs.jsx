import Navbar from "../navbar/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-8 bg-gray-100 rounded-xl mt-10 shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-wider mb-4">
          About Us
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Welcome to the Employee Management System. Our system is designed to
          streamline and enhance the management of employees within an
          organization. Our goal is to provide an intuitive and efficient
          platform that helps manage employee data, track performance, and
          improve overall productivity.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-xs hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60"
              alt="Team Member 1"
              className="w-28 h-28 mx-auto rounded-full border-4 border-gray-200 object-cover hover:scale-110 transition-transform duration-300"
            />
            <h5 className="mt-4 text-xl font-semibold text-gray-800">
              Bob Decker
            </h5>
            <p className="text-gray-500">CEO & Founder</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-xs hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60"
              alt="Team Member 2"
              className="w-28 h-28 mx-auto rounded-full border-4 border-gray-200 object-cover hover:scale-110 transition-transform duration-300"
            />
            <h5 className="mt-4 text-xl font-semibold text-gray-800">
              John Smith
            </h5>
            <p className="text-gray-500">Lead Developer</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-xs hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60"
              alt="Team Member 3"
              className="w-28 h-28 mx-auto rounded-full border-4 border-gray-200 object-cover hover:scale-110 transition-transform duration-300"
            />
            <h5 className="mt-4 text-xl font-semibold text-gray-800">
              Emily Johnson
            </h5>
            <p className="text-gray-500">Project Manager</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
