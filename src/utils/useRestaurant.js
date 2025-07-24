import { useEffect, useState } from "react";
const useRestaurant = (id) => {
  const [res, setRes] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3513124&lng=85.3439863&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json.data);
    setRes(json.data);
  }

  return res;
};

export default useRestaurant;
