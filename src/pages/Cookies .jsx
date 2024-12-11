const Cookies = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-survey-dark mb-6">Cookie Notice</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
              <p className="text-gray-600">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <p className="text-gray-600">
                We use cookies to understand how you use our website and to improve our services. This includes personalizing content, providing social media features, and analyzing our traffic.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Cookie Choices</h2>
              <p className="text-gray-600">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cookies;