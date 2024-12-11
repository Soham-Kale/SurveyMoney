import React from "react";

const solutions = [
  {
    title: "Customer Feedback",
    description: "Understand your customers better and improve their experience",
    image: "/src/assets/feedback.png",
  },
  {
    title: "Employee Engagement",
    description: "Create a better workplace by listening to your employees",
    image: "/src/assets/feedback2.png",
  },
  {
    title: "Market Research",
    description: "Make data-driven decisions with market research surveys",
    image: "/src/assets/feedback.png",
  },
];

const Solutions = () => {
  return (
    <div className="bg-survey-gray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-survey-dark mb-4">
            Solutions for every team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get the feedback you need to make better decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-survey-dark mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <button className="text-survey-green font-medium hover:text-green-600">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;