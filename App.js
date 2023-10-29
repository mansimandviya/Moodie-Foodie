import React from "react";
import ReactDOM from "react-dom/client";

const resObj ={

    "info": {
      "id": "570509",
      "name": "Bakingo",
      "cloudinaryImageId": "qw5ih3eo02z3nb6rj1ne",
      "locality": "Junasandra Main Road",
      "areaName": "Sarjapur Road",
      "costForTwo": "₹299 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Beverages",
        "Snacks"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "570509",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4100
      },
      "parentId": "3818",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-10-30 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=570509",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  };

const RestaurantCard = (props) => {
  const{resData} = props;
  return(
    <div className="res-card">
      <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}></img>
      <h3 className="res-name">{resData.info.name}</h3>
      <h4 className="res-cuisine">{resData.info.cuisines.join(", ")}</h4>
      <h5 className="res-star-rating">{resData.info.avgRatingString}</h5>
      <h5 className="res-cost-for-2">{resData.info.costForTwo}</h5>
      <h5 className="res-delivery-time">{resData.info.sla.deliveryTime} mins</h5>


    </div>
  );
}

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYxpjoAzTnI1BXD7FHtHfBX9BmMxbv1s-EA&usqp=CAU"
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return(
    <div className="body">
      <div className="search">Search

      </div>
      <div className="rest-container">
        {/* Restaurant Cards */}
        {/* <RestaurantCard resName="Meghna Foods" resCuisine = "North Indian, Biryani" resRating="4.4"/>
        <RestaurantCard resName="KFC" resCuisine = "Burger, Fast Food"resRating="4.8"/>
        <RestaurantCard resName="Mc'Donalds" resCuisine = "Burger, Beverages"resRating="4.0"/> */}
        <RestaurantCard resData = {resObj}/>
        
      </div>
    </div>
    
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
