const platforms = ["AWS", "Azure", "Google Cloud", "Snowflake", "Databricks"];

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50">
      {/* Platforms */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center border-b border-gray-200">
        <p className="text-gray-500 text-sm tracking-widest font-semibold mb-8">
          CERTIFIED PARTNERSHIPS & PLATFORMS
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {platforms.map((item, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* About Resolve IQ */}
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-blue-600 font-semibold tracking-widest text-sm mb-6">
          ABOUT RESOLVE IQ
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Engineering Leaders Who've Been in Your Shoes
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed mb-6">
          Resolve IQ was founded by experienced engineering leaders, enterprise
          architects, and cloud specialists who spent decades building and
          scaling technology at Fortune 500 companies. We understand the unique
          challenges mid-sized enterprises face — and we've built a consultancy
          that delivers enterprise-grade solutions without the enterprise
          overhead.
        </p>

        <p className="text-gray-500 text-lg leading-relaxed">
          Our mission is simple: help companies scale securely, modernize
          efficiently, and compete fearlessly.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
