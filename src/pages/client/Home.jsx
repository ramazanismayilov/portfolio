import React from "react";

const Home = () => {
  return (
    <main className="flex-1 m-6 rounded-3xl bg-gradient-to-b from-[#1b1e22] to-[#14171a] p-8 text-white">
      <p className="text-green-400 font-bold mb-2">Blog Post</p>
      <h1 className="text-3xl font-bold mb-2">Data Center Infrastructure</h1>
      <p className="text-sm text-gray-400 mb-4">
        APRIL 28, 2020 • CODE • BY OLEKSANDR
      </p>
      <img src="/datacenter.jpg" alt="Data Center" className="rounded-xl" />
    </main>
  );
};

export default Home;
