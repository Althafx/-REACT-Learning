import {LOGO} from "../utils/img.js";
import { useState } from "react";
import {Link} from 'react-router-dom'

function Header(){
  
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const log = () => {
    setIsLoggedIn(isLoggedIn == "Login" ? "Logout" : "Login");
  }
  
  return(
    <div className="headerContainer">
      <div className="logo">
        <img className='logo-img' src={LOGO} alt="Music Logo" />
      </div>
      <div>
        <h1 className="title">Tune Quest</h1>

      </div>
      <div className="navItems">
        <ul className="nav">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <li>Contact</li>
          <li>Cart</li>
          <button onClick={log}>{isLoggedIn}</button>
        </ul>
        
      </div>
    </div>
  )
}

export default Header;