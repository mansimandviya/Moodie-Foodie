import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const RestaurantMenu = () => {

    const [resInfo, setresInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9160035&lng=77.64267889999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setresInfo(json.data);
    }

    if (resInfo === null) return <Shimmer/>
    return(
        <div className = " Menu">
            <h1>Name of restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Burger
                </li>
                <li>Pizza
                </li>
                <li>Sandwich
                </li>
                <li>Pasta
                </li>
            </ul>
        </div>

    )
}
export default RestaurantMenu;