
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";


const Body = () => {

const[listOfRestaurants, setlistOfRestaurants] = useState([]);

const[searchText, setSearchText] = useState("");

const[filteredRestaurant, setfilteredRestaurant] = useState([]);



useEffect(()=>{
  fetchData();
},[]
);

const fetchData = async() =>{
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9160035&lng=77.64267889999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
    const json = await data.json();

    console.log(json);
    setlistOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

//conditional rendering


    return listOfRestaurants.length === 0 ? (<Shimmer/>
    ):(

      <div className="body">
        <div className="btns">
        <div className="search-bar">
          <input 
          type="text" 
          className="searchbox" 
          value = {searchText} 
          onChange={(e) => {setSearchText(e.target.value);
          }}>
          </input>
          <button className="search-btn" onClick={()=>{
            const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setfilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>

        <div className="filter-topRated-btn">
          <button className="trr-btn" 
            onClick={()=>{
            const filteredList = listOfRestaurants.filter((res)=>res.info.avgRatingString > 4.2);
            setlistOfRestaurants(filteredList);
            }}>Top Rated Restaurant
          </button>
        </div>
        </div>

        <div className="rest-container">
          {
          filteredRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))}
        </div>
      </div>
      
    );
  };
export default Body;