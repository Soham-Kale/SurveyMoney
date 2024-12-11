const Privacy = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-survey-dark mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-gray-600">
                We collect information that you provide directly to us, information we obtain automatically when you use our services, and information from other sources.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-gray-600">
                We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our company and our users.
              </p>
            </section>
            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Privacy;