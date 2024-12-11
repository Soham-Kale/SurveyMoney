import React from "react";
import surveyImg from "../assets/surveyImg.png";

const Hero = () => {
  return (
    <div className="bg-survey-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-survey-dark mb-6 text-center">
            Create online surveys and forms that mean business
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Create free online surveys, forms, and questionnaires. Get the insights you need to make smarter decisions.
            </p>
            <div className="space-x-4">
              <button className="bg-survey-green text-white px-8 py-3 rounded-md font-medium bg-black transition-colors">
                Get started free
              </button>
              <button className="border border-survey-green text-survey-green px-8 py-3 rounded-md font-medium hover:bg-green-50 transition-colors">
                Contact sales
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={surveyImg}
              alt="Survey illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;