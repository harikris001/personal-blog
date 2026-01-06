import React from "react";

const CategoriesAndSearch = () => {
  return (
    <div className="relative flex items-center justify-between mb-12 mt-22">
      <ul className="flex gap-6 p-1">
        <li className="cursor-pointer">All</li>
        <li className="cursor-pointer">UX</li>
        <li className="cursor-pointer">Robotics</li>
        <li className="cursor-pointer">Machine Learning</li>
      </ul>

      <form>
        <input
          className="border-2 border-gray-300 rounded-4xl pl-1.5 py-1"
          type="text"
          placeholder="Search blogs...."
        />
      </form>

      <hr className="absolute h-px bottom-0 inset-x-0 border-gray-300 mx-2.5" />
    </div>
  );
};

export default CategoriesAndSearch;
