import {CDN_URL} from "../../src/utils/constants"




const RestaurantCard = (props) => {
    const{resData} = props;
    const{
      name, cuisines, avgRatingString, costForTwo, sla
    } = resData?.info;
    return(
      <div className="res-card">
        <img className="res-img" src={CDN_URL+resData.info.cloudinaryImageId}></img>
        <h3 className="res-name">{name}</h3>
        <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
        <ul className="res-display-items">
        <li><h5 className="res-star-rating">{avgRatingString}</h5></li>
        <li><h5 className="res-cost-for-2">{costForTwo}</h5></li>
        <li><h5 className="res-delivery-time">{sla.deliveryTime} mins</h5></li>
        </ul>
  
      </div>
    );
  }
export default RestaurantCard; 