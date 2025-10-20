import {IMAGE} from "../utils/img.js";

function Card({hotelName, place, distance, cuisine, rating}){
  return(
    <div className="card">
      <div className='img'>
      <img className='hotel-img' src={IMAGE} alt="Placeholder Image" />
      </div>
       <h3>{hotelName}</h3>
      <h4>{place}</h4>
      <h4>{distance}</h4>
      <h4>{cuisine}</h4>
      <h4>{rating} ⭐</h4>
    </div>
  )
}

export default Card;