const About = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#15191C]/80 via-[#202527]/70 to-[#292a2a]/60 backdrop-blur-lg border-white/20 border-1 min-h-screen rounded-4xl overflow-hidden"
      style={{ transform: "perspective(5000px) rotateY(10deg)" }}
    >
      <div className="max-w-4xl">
        <div className="border-b w-full border-white/20 backdrop-blur-sm p-5">
          <h5 className="text-[#fefefe] text-[21px] tracking-wider">
            <span className="text-green-400">A</span>bout Me
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 p-5 items-start">
          <p className="text-[#CECECE] leading-relaxed">
            Hey, there 👋 I'm Benjamin, a Software developer and Data scientist
            with over 8+ years of experience, specialising in Java and React.
            Also I proficient at using tools and programming languages such as
            Python or SQL to manipulate and analyze data.
          </p>
          <div className="flex justify-end">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 w-full max-w-md">
              <div className="flex items-center mb-4">
                <span className="bg-green-500 text-black px-3 py-1 rounded text-sm font-medium">
                  Location:
                </span>
                <span className="text-white ml-4">Los Angeles, USA</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="bg-green-500 text-black px-3 py-1 rounded text-sm font-medium">
                  Languages:
                </span>
                <span className="text-white ml-4">English, German</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="bg-green-500 text-black px-3 py-1 rounded text-sm font-medium">
                  Skills:
                </span>
              </div>
              <div className="grid grid-cols-5 gap-3 mt-4">
                {["⚛", "A", "↓", "🐍", "🌿", "A", "JS", "DB", "V", "PHP"].map(
                  (skill, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center"
                    >
                      <span className="text-black font-bold">{skill}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            <span className="text-green-400">M</span>y Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-black font-bold text-xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              App Development
            </h3>
            <p className="text-gray-400 leading-relaxed">
              End-to-end organization, ui/ux design, and development of
              applications using modern frameworks and best practices.
            </p>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-black font-bold text-xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Data Scientist
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Great marketing campaigns, improve customer experience, and drive
              business growth through data-driven insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
