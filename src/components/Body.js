import { useEffect, useState } from "react";
import { RestaurantList } from "../constant";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";


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
console.log(restaurantData);

    } 
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  // not render component(Early return)
  if(!allRestaurants === 0) return null;

  //when restaurant is not found
  // if(filteredRestaurants?.length === 0) return <><h1>No Restaurant Found</h1></>



  return (allRestaurants?.length === 0) ? <Shimmer/> :  (
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
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant, index) => {
          return <RestaurantCard
    key={restaurant?.info?.id || index}
    info={restaurant?.info}
  />
        })}
      </div>
    </>
  );
};
export default Body;







// import { useState } from "react";
// import { RestaurantList } from "../constant";
// import { ResturantCard } from "./RestaurantCard";

// function filterData(searchText, restaurants) {
//   return restaurants.filter((restaurant) =>
//     restaurant.name.toLowerCase().includes(searchText.toLowerCase())
//   );
// }

// const Body = () => {
//   const [searchText, setSearchText] = useState("");
//   const [allRestaurants, setAllRestaurants] = useState(RestaurantList);
//   const [restaurants, setRestaurants] = useState(RestaurantList);

//   return (
//     <>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//           }}
//         />
//         <button
//           className="search-btn"
//           onClick={() => {
//             const data = filterData(searchText, allRestaurants);
//             setRestaurants(data);
//           }}>
//           Search
//         </button>
//       </div>
//       <div className="restaurant-list">
//         {restaurants.map((restaurant) => {
//           return <ResturantCard {...restaurant} key={restaurant.id} />;
//         })}
//       </div>
//     </>
//   );
// };

// export default Body;
