import { useEffect, useState, useContext } from "react";
import { RestaurantList } from "../constant";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import NoRestaurantFound from "./NoRestaurantFound";
import { Link } from "react-router";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

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
  const {user,setUser}= useContext(UserContext);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3513124&lng=85.3439863&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // Navigate to the actual list of restaurants
      const restaurantCard = json?.data?.cards?.find(
        (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const restaurantData =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setAllRestaurants(restaurantData);
      setFilteredRestaurants(restaurantData);
      setLoading(false);
      console.log(restaurantData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>offline, please check your internet connection!!</h1>;
  }
  if (!isOnline) {
    return (
      <h1 className="text-center text-xl text-red-600 font-semibold mt-8">
        Offline, please check your internet connection!
      </h1>
    );
  }
  if (!allRestaurants === 0) return null;

  return (
    <>
      {/* Search Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4 bg-[#fff2e0] my-4">
        <input
          type="text"
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0c9ee]"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="w-full sm:w-auto bg-[#898ac4] hover:bg-[#a2aadb] text-white px-4 py-2 rounded-md transition"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}>
          Search
        </button>
        <input value={user.name} onChange={e=> setUser({
          name: e.target.value,
          email:"new@gmail.com"
        })}></input>
      </div>

      {/* Offline Message */}
      {!isOnline && (
        <h1 className="text-center text-lg text-red-600 font-semibold mt-6">
          Offline, please check your internet connection!
        </h1>
      )}

      {/* Shimmer Loader */}
      {loading && <Shimmer />}

      {/* Restaurant Cards */}
      {!loading && filteredRestaurants.length === 0 ? (
        <NoRestaurantFound />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-[#fefefe]">
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}>
              <RestaurantCard info={restaurant.info} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
