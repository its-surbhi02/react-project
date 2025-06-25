const NoRestaurantFound = () => {
  return (
    <div className="no-restaurant-container">
      <div className="no-restaurant-img"></div>
      <h2 className="no-restaurant-text">No Restaurants Found</h2>
      <p className="no-restaurant-subtext">Try searching with different keywords.</p>
    </div>
  );
};

export default NoRestaurantFound;