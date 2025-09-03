const Shimmer = () => {
  // Show 10 shimmer cards
  const shimmerArray = new Array(10).fill(0);

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 p-4">
      {shimmerArray.map((_, index) => (
        <div
          key={index}
          className="bg-zinc-800 rounded-lg shadow-md animate-pulse flex flex-col items-center"
        >
          <div className="w-40 sm:w-44 md:w-48 lg:w-56 h-48 sm:h-52 md:h-56 lg:h-60 bg-zinc-700 rounded-lg mb-3"></div>
          <div className="w-32 sm:w-36 md:w-40 h-5 sm:h-6 bg-zinc-700 rounded mb-2"></div>
          <div className="w-24 sm:w-28 md:w-32 h-4 sm:h-5 bg-zinc-700 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
