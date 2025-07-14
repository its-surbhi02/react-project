// export const ResturantCard = ({ image, name, rating, deliveryTime,cuisine, location }) =>{
//   return(
//     <div className="card">
//       <img src={image} />
//       <h2>{name}</h2>
//       <h3>{rating} stars,  {deliveryTime}</h3> 
//       <h4>{cuisine.join(", ")}</h4>
//       <h4>{location.city}</h4>
      
//     </div>
//   )
// } 
export const RestaurantCard = ({ info }) => {
    if (!info) {
    return <div></div>;
  }
  const {
    name,
    avgRating,
    sla,
    cuisines,
    cloudinaryImageId,
    areaName,
    costForTwo
  } = info;

  return (
    // <div className="restaurant-card">
    //   <img
    //     className="restaurant-image"
    //     src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
    //     alt={name}
    //   />
    //   <div className="restaurant-details">
    //     <h3 className="restaurant-name">{name}</h3>
    //     <p className="restaurant-cuisines">{cuisines.join(", ")}</p>
    //     <div className="restaurant-meta">
    //       <span className="rating">⭐ {avgRating}</span>
    //       <span>•</span>
    //       <span>{sla.deliveryTime} MINS</span>
    //       <span>•</span>
    //       <span>{costForTwo}</span>
    //     </div>
    //     <p className="restaurant-area">{areaName}</p>
    //   </div>
    // </div>
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
  <img
    className="w-full h-48 object-cover"
    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
    alt={name}
  />
  <div className="p-4">
    <h3 className="text-lg font-semibold text-[#898ac4]">{name}</h3>
    <p className="text-sm text-gray-500 mt-1">{cuisines.slice(0, 3).join(", ")}
  {cuisines.length > 3 && " ..."}</p>

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