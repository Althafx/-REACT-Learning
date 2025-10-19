//heaeder
//-navbar,-logo

//body
//-card


import './App.css'

function Header(){
  return(
    <div className="headerContainer">
      <div className="logo">
        <img className='logo-img' src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" alt="React Logo" />
      </div>
      <div>Althaf's Empire</div>
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

function Card(){
  return(
    <div className="card">
      <div className='img'>
      <img className='hotel-img' src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=414x232" alt="Placeholder Image" />
      </div>
      <h3>Althaf's Hotel</h3>
      <h4>Kochi Kerala</h4>
      <h4>20 min</h4>
      <h4>chinese, thai, indian</h4>
      <h4>4.9</h4>
    </div>
  )
}

function Body(){
  return(

    <div className="bodyContainer">
    <div className='searchbar'>
      <input type="text" placeholder='Search...' />
    </div>

    <Card/>
        <Card/>
            <Card/>
                <Card/>
                    <Card/>
                        <Card/>
        <Card/>    <Card/>    <Card/>    <Card/>



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