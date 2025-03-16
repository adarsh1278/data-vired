import React from 'react';

const WebinarSection = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">Webinar</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer a brand new approach to the most basic learning paradigms. Choose from a wide range of 
          learning options and gain new skills! Our school is know.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* First Webinar Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-300 h-48"></div>
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Detail</h3>
              <p className="text-gray-600 text-sm">Time and Date</p>
            </div>
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-medium py-2 px-6 rounded-md transition-colors">
              Apply now
            </button>
          </div>
        </div>

        {/* Second Webinar Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-300 h-48"></div>
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Detail</h3>
              <p className="text-gray-600 text-sm">Time and Date</p>
            </div>
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-medium py-2 px-6 rounded-md transition-colors">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarSection;