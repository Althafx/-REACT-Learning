import Card from "./card";
import hotels from "../utils/mockdata.js";


function Body(){
  return(
    <div className="bodyContainer">
    <div className='searchbar'>
      <input type="text" placeholder='Search...' />
    </div>

     <div className="cards">
        {hotels.map(hotel => (
          <Card key={hotel.id} hotelName={hotel.hotelName} cuisine={hotel.cuisine} place={hotel.place} distance={hotel.distance} rating={hotel.rating} />
        ))}
      </div>
    </div>
  )
}

export default Body;