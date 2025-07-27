const FoodItem = ({ info }) => {
    if (!info) {
    return <div></div>;
  }
  const {
  name = "No name",
  avgRating = "N/A",
  sla = {},                  // provide fallback empty object
  cuisines = [],
  cloudinaryImageId,
  areaName = "",
  costForTwo = ""
} = info || {};

  return (

    <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
  <img
    className="w-full h-48 object-cover"
    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
    alt={name}
  />
  <div className="p-4">
    <h3 className="text-lg font-semibold text-[#898ac4]">{name}</h3>
    <p className="text-sm text-gray-500 mt-1">
  {Array.isArray(cuisines) ? cuisines.slice(0, 3).join(", ") : "No cuisines"}
  {Array.isArray(cuisines) && cuisines.length > 3 && " ..."}
</p>


    <div className="flex flex-wrap items-center gap-2 text-sm text-[#898ac4] mt-2 font-medium">
      <span>⭐ {avgRating}</span>
      <span>•</span>
      <span>{sla.deliveryTime} MINS</span>
      <span>•</span>
      <span>{costForTwo}</span>
    </div>

    <p className="text-sm text-gray-600 mt-1">{areaName}</p>
  </div>
</div>

  );
};

export default FoodItem;