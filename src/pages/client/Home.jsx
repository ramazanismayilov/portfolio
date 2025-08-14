const Home = () => {
  return (
    <div className="flex-1 pl-8">
      <div className="max-w-4xl">
        <div className="mb-8">
          <span className="text-green-400 font-medium text-sm uppercase tracking-wide">
            Blog Post
          </span>
          <h1 className="text-4xl font-bold text-white mt-2 mb-4">
            Data Center Infrastructure
          </h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>APRIL 28, 2020</span>
            <span>•</span>
            <span className="text-green-400">CODE</span>
            <span>•</span>
            <span>BY OLEKSANDR</span>
          </div>
        </div>
        <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden mb-8">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
            alt="Data Center Infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Modern data centers are the backbone of our digital infrastructure,
            requiring sophisticated planning and implementation to ensure
            optimal performance and reliability.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            From power distribution to cooling systems, every component must
            work in harmony to support the ever-growing demands of cloud
            computing and digital services.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            In this comprehensive guide, we'll explore the key elements that
            make up a successful data center infrastructure and the best
            practices for implementation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
