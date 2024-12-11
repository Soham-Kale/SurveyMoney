const Terms = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-survey-dark mb-6">Terms of Service</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="text-gray-600">
                Permission is granted to temporarily download one copy of the materials (information or software) on SurveyMonkey Clone's website for personal, non-commercial transitory viewing only.
              </p>
            </section>
            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Terms;