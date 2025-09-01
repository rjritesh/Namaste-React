const Shimmer = () => {
  // Show 6 shimmer cards
  const shimmerArray = new Array(6).fill(0);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {shimmerArray.map((_, index) => (
        <div
          key={index}
          className="bg-zinc-800 rounded-lg shadow-md p-4 w-56 animate-pulse"
        >
          <div className="h-50 bg-zinc-700 rounded-lg mb-2"></div>
          <div className="h-6 bg-zinc-700 rounded mb-2"></div>
          <div className="h-4 bg-zinc-700 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
