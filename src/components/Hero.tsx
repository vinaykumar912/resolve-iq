export const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#040a0e] py-20 min-h-[80vh] flex items-center"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Technology Solutions That Drive{" "}
          <span className="bg-[#00AAFF] text-[#FFFF] px-2 rounded inline-block mt-2">
            Business Growth
          </span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
          We build scalable data platforms, cloud solutions, and enterprise
          applications that help organizations make better decisions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-[#00AAFF] text-white px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Our Services
          </a>

          {/*
          <a
            href="#contact"
            className="border border-[#1D04C3] text-[#1D04C3] px-8 py-3 rounded-lg hover:bg-[#1D04C3] hover:text-white transition"
          >
            Contact Us
          </a>
          */}
        </div>
      </div>
    </section>
  );
};
