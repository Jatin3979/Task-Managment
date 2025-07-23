import React from "react";

const Header = ({data,onLogout}) => {
  

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-2xl font-semibold">
        Hello, <br />
        <span className="text-3xl text-emerald-400">{data.firstName} 👋</span>
      </h1>
      <button onClick={onLogout} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
        Log out
      </button>
    </div>
  );
};

export default Header;
