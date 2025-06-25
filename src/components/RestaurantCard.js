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
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt={name}
      />
      <div className="restaurant-details">
        <h3 className="restaurant-name">{name}</h3>
        <p className="restaurant-cuisines">{cuisines.join(", ")}</p>
        <div className="restaurant-meta">
          <span className="rating">⭐ {avgRating}</span>
          <span>•</span>
          <span>{sla.deliveryTime} MINS</span>
          <span>•</span>
          <span>{costForTwo}</span>
        </div>
        <p className="restaurant-area">{areaName}</p>
      </div>
    </div>
  );
};