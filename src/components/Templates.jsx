const templates = [
    {
      name: 'Customer Feedback',
      description: 'Gather insights from your customers to improve your service.',
      image: '/template-customer-feedback.svg',
    },
    {
      name: 'Employee Engagement',
      description: 'Understand your employees and improve workplace satisfaction.',
      image: '/template-employee-engagement.svg',
    },
    {
      name: 'Market Research',
      description: 'Conduct research to understand market trends and opportunities.',
      image: '/template-market-research.svg',
    },
    {
      name: 'Event Planning',
      description: 'Plan and organize successful events with ease.',
      image: '/template-event-planning.svg',
    },
  ];
  
  const Templates = () => {
    return (
      <div className="bg-tertiary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Explore Our Templates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a variety of templates to get started quickly.
            </p>
          </div>
  
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((template, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src={template.image}
                  alt={template.name}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {template.name}
                  </h3>
                  <p className="text-gray-600">{template.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Templates;