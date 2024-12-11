const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Create unlimited surveys",
        "10 questions per survey",
        "100 responses per survey",
        "Basic survey templates",
        "Email support",
      ],
      buttonText: "Start for free",
      popular: false,
    },
    {
      name: "Individual Advantage",
      price: "$25",
      period: "per month",
      features: [
        "Everything in Basic",
        "Unlimited questions",
        "Unlimited responses",
        "Advanced survey logic",
        "Custom branding",
        "Team collaboration",
        "Priority support",
      ],
      buttonText: "Start free trial",
      popular: true,
    },
    {
      name: "Team Advantage",
      price: "$50",
      period: "per user/month",
      features: [
        "Everything in Team",
        "Advanced security",
        "API access",
        "HIPAA compliance",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 phone support",
      ],
      buttonText: "Contact sales",
      popular: false,
    },
  ];
  
  const Pricing = () => {
    return (
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-survey-dark mb-4">
              Choose the right plan for you
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            Get an individual plan with features that you need, or create a team instead!
            </p>
          </div>
  
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg border ${
                  plan.popular
                    ? 'border-survey-green shadow-lg scale-105'
                    : 'border-gray-200'
                } p-8 relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 bg-survey-green text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most popular
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-survey-dark mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span> <br />
                    {plan.period && (
                      <span className="text-gray-900 mt-2">{plan.period}</span>
                    )}
                  </div>
                  <button
                    className={`w-full py-2 px-4 rounded-lg font-medium text-center${
                      plan.popular
                        ? 'bg-survey-green text-white bg-green-600'
                        : 'border border-survey-green text-white bg-blue-600'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
                <div className="mt-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-survey-green mr-3"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-center">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Pricing;