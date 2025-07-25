
const ResMenuHeader = ({resInfo}) => {

    const { name, cuisines, avgRating, costForTwoMessage, locality } = resInfo;
  return (
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
        <p className="text-gray-600 mb-1">{cuisines?.join(", ")}</p>
        <p className="text-sm text-gray-700 mb-1">
          ⭐ {avgRating} • {costForTwoMessage}
        </p>
        <p className="text-sm text-gray-500">{locality}</p>
      </div>
  )
}

export default ResMenuHeader