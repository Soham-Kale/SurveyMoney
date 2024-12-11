const features = [
    {
      title: "Surveys & Forms",
      description: "Create surveys and forms that people love to answer",
      icon: "📝",
    },
    {
      title: "Enterprise",
      description: "Get the tools you need to power your organization",
      icon: "🏢",
    },
    {
      title: "Integrations",
      description: "Connect with the apps you use every day",
      icon: "🔄",
    },
    {
      title: "Security",
      description: "Industry-leading security and compliance",
      icon: "🔒",
    },
  ];
  
  const Features = () => {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-survey-dark mb-4">
              Everything you need to create the best surveys
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the tools you need to send surveys, collect responses, and analyze the results.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-survey-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;