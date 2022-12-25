import { HiOutlineCalendar } from "react-icons/hi";
import { FaStar } from "react-icons/fa";

const RestaurantComponent=({name,profile_image_url,images,images2,images3,time_open,time_close,rating})=>{
return(
    <div className="single-restaurant">
        <span>
            <img src={profile_image_url} alt={name} className="logo"/>
            <h2>{name}</h2>
        </span>
        <span className="logo1">
            <h1><HiOutlineCalendar className="calendar"/>{time_open}</h1><h1>{time_close}</h1>
        </span> 
            <h1 className="rating"><FaStar className="star"/>{rating}</h1>
        <span className="photos">
            <img src={images} alt={name} className="menu1"/>
            <img src={images2} alt={name} className="menu1"/>
            <img src={images3} alt={name} className="menu1"/>
        </span>
    </div>
)
}

export default RestaurantComponent