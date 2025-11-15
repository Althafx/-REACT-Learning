import {LOGO} from "../utils/img.js";
import { useState } from "react";
import {Link} from 'react-router-dom'
import onlinecheck from "../utils/useOnlineCheck.js";

function Header(){
  
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const log = () => {
    setIsLoggedIn(isLoggedIn == "Login" ? "Logout" : "Login");
  }
  const check = onlinecheck();
  return(
    <div className="flex bg-purple-600 justify-between items-center p-4 shadow-lg">
      
        <img className='w-12' src={LOGO} alt="Music Logo" />
        <Link to='/store'><button className="bg-blue-400 p-2 rounded-lg ml-29">Vinyl Records Store</button></Link>
      
      <div className="flex-grow text-center">



        <h1 className="text-4xl text-white font-poppins" >Tune Quest</h1>
        

      </div>
      <div className="flex">
        <ul className="flex text-lg text-white gap-6 items-center">
          <li>{check?"🟢":"🔴"}</li>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login" onClick={log}>{isLoggedIn}</button>
        </ul>
        
      </div>
    </div>
  )
}

export default Header;