import { useEffect, useState } from "react";
import { RestaurantList } from "../constant";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import NoRestaurantFound from "./NoRestaurantFound";
import { Link } from "react-router";
import useOnline from "../utils/useOnline";



function filterData(searchText, allRestaurants) {
  const filterdata = allRestaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterdata;
}

const Body = () => {
  
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(()=>{
    getRestaurant();

  }, []);
  
  async function getRestaurant() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3513124&lng=85.3439863&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // Navigate to the actual list of restaurants
      const restaurantCard = json?.data?.cards?.find((card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants);

const restaurantData = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
setAllRestaurants(restaurantData);
setFilteredRestaurants(restaurantData);
setLoading(false);
console.log(restaurantData);


    } 
    catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  const isOnline = useOnline();

  if(! isOnline){
    return<h1>offline, please check your internet connection!!</h1>
  }

  // not render component(Early return)
  if(!allRestaurants === 0) return null;

if (loading) return <Shimmer />;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            // console.log("jjjj",restaurants.name)
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurant variable
            setFilteredRestaurants(data);
          }}>
          Search
        </button>
      </div>
      
      {filteredRestaurants.length === 0 ? ( <NoRestaurantFound/>  ) : (
        <div className="restaurant-list">
          {/* {filteredRestaurants
  .filter((r) => r?.info)
  .map((restaurant, index) => {
    console.log("Restaurant ID:", restaurant.info.id); // 👈 log her
  })} */}
          {filteredRestaurants.map((restaurant) => (
            <Link to={ "/restaurant/" + restaurant.info.id } key={restaurant?.info?.id }>
            <RestaurantCard info={restaurant?.info}/> </Link>
          ))}
        </div>
      )}
    </>
  );
};
export default Body;

