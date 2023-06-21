import { useState, useEffect } from "react";
import { RES_URL } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL);
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRes = listOfRestaurant.filter((el) =>
                el.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = filteredRestaurant.filter(
              (elm) => elm.data.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Resto
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((el) => (
          <RestaurantCard key={el.data.id} resData={el} />
        ))}
      </div>
    </div>
  );
};

export default Body;
