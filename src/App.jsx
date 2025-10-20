//heaeder
//-navbar,-logo

//body
//-card


import './App.css'


export const hotels = [
  {
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
    rating: 4.7,
  },
  {
    id: 3,
    hotelName: "Mountain View Lodge",
    place: "Munnar",
    distance: "5 km from town",
    cuisine: "South Indian, Chinese",
    rating: 4.3,
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
    rating: 4.6,
  },
];



function Header(){
  return(
    <div className="headerContainer">
      <div className="logo">
        <img className='logo-img' src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" alt="React Logo" />
      </div>
      <div>Althaf's Empire

      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

function Card({hotelName, place, distance, cuisine, rating}){
  return(
    <div className="card">
      <div className='img'>
      <img className='hotel-img' src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=414x232" alt="Placeholder Image" />
      </div>
       <h3>{hotelName}</h3>
      <h4>{place}</h4>
      <h4>{distance}</h4>
      <h4>{cuisine}</h4>
      <h4>{rating} ⭐</h4>
    </div>
  )
}

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

function App() {
  return (
    <div className="App">
     
      <Header />
      <Body/>
    </div>
  )
}

export default App