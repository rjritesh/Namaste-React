import React from 'react';

const ShimmerMenu = () => {
  return (
    <div className="px-60">
      <div className="flex flex-col gap-5">
        {Array(6).fill("").map((_, index) => (
          <div
            key={index}
            className="w-full h-48 bg-gray-200 rounded-xl animate-pulse shadow-sm"
          >
            <div className="h-2/3 bg-gray-300 rounded-t-xl"></div>
            <div className="p-4 space-y-2">
              <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
              <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerMenu;
