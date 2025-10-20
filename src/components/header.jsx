import {REACTLOGO} from "../utils/img.js";

function Header(){
  return(
    <div className="headerContainer">
      <div className="logo">
        <img className='logo-img' src={REACTLOGO} alt="React Logo" />
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

export default Header;