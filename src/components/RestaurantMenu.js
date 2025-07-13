import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer.js";
import useRestaurant from "../utils/useRestaurant.js";

const RestaurantMenu = () => {
  const { id } = useParams();

  // const [res, setRes] = useState(null);
  const res = useRestaurant(id);

  const restaurantInfoCard = res?.cards?.find((c) => c?.card?.card?.info?.name);

  const info = restaurantInfoCard?.card?.card?.info;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    locality,
    areaName,
    costForTwoMessage,
    avgRating,
  } = info || {};

  // Extract menu items
  const groupedCards = res?.cards?.find((c) =>
    Array.isArray(c?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  );

  const menuCards =
    groupedCards?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const menuItems = menuCards
    .map((card) => card.card?.card)
    .filter((card) => card?.itemCards)
    .flatMap((card) => card.itemCards.map((item) => item.card.info));

  return !res ? (
    <Shimmer />
  ) : (
    <div className="menu-card">
      <img
        src={
          cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/${cloudinaryImageId}`
            : ""
        }
        alt={name}
        className="menu-image"
      />
      <div className="menu-details">
        <h1 className="menu-name">{name}</h1>
        <p className="menu-cuisines">{cuisines?.join(", ")}</p>
        <div className="menu-meta">
          <span className="menu-rating">⭐ {avgRating}</span>
          <span>{costForTwoMessage}</span>
        </div>
        <p className="menu-area">{locality || areaName}</p>
      </div>

      <h2 className="menu-heading">Menu</h2>
      <div className="menu-item-container">
        {menuItems.map((item) => (
          <div className="menu-item-card" key={item.id}>
            <div className="menu-item-text">
              <h3>{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
              <p className="menu-item-price">
                ₹{item.price / 100 || item.defaultPrice / 100}
              </p>
            </div>
            {item.imageId && (
              <img
                className="menu-item-image"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/${item.imageId}`}
                alt={item.name}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
