import Card from "./card";
// import hotels from "../utils/mockdata.js";
import {useState} from 'react'


function Body(){

  const [hotels, setHotels] = useState([ {
    id: 1,
    hotelName: "The Royal Orchid",
    place: "Bangalore",
    distance: "2.5 km from city center",
    cuisine: "Indian, Continental",
    rating: 4.5,
  },
  {
    id: 2,
    hotelName: "Sea Breeze Resort",
    place: "Goa",
    distance: "500 m from beach",
    cuisine: "Seafood, Goan, Italian",
    rating: 3.9,
  },
  {
    id: 3,
    hotelName: "Mountain View Lodge",
    place: "Munnar",
    distance: "5 km from town",
    cuisine: "South Indian, Chinese",
    rating: 3.3,
  },
  {
    id: 4,
    hotelName: "Cityscape Inn",
    place: "Mumbai",
    distance: "1 km from Marine Drive",
    cuisine: "North Indian, Continental",
    rating: 4.2,
  },
  {
    id: 5,
    hotelName: "Sunset Valley Suites",
    place: "Manali",
    distance: "3 km from Mall Road",
    cuisine: "Tandoor, Tibetan, Italian",
    rating: 4.0,
  }])

  function topRated(){
    const filtered = hotels.filter(hotel=>hotel.rating>4)
    setHotels(filtered)
    console.log(filtered)

  }

  

  return(
    <div className="bodyContainer">
    <div className='searchbar'>
      <input type="text" placeholder='Search...' />
    </div>

     <div className="cards">
      <div className="button">
        <button onClick={topRated}>TOP RATED RESTAURANTS</button>
      </div>
        {hotels.map(hotel => (
          <Card key={hotel.id} hotelName={hotel.hotelName} cuisine={hotel.cuisine} place={hotel.place} distance={hotel.distance} rating={hotel.rating} />
        ))}
      </div>
    </div>
  )
}

export default Body;