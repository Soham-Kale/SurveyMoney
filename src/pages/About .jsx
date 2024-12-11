// src/pages/About.jsx
const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-secondary mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We help organizations and individuals create professional surveys,
            collect responses, and gain insights from data to make better decisions.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600">
            Founded with the vision of making it easy for anyone to create
            surveys and gather feedback, we've grown to become a leading
            platform trusted by millions of users worldwide.
          </p>
        </div>
        <div>
          <img
            src="/about-image.svg"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;