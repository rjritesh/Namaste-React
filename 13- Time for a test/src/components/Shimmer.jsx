const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-60 h-[300px] bg-white rounded-xl shadow animate-pulse p-4"
          >
            <div className="h-40 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg mb-4"></div>
            <div className="h-3 bg-gray-300 rounded w-2/3 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-4/5 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-full"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
