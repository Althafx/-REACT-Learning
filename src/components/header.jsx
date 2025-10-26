import {LOGO} from "../utils/img.js";

function Header(){
  return(
    <div className="headerContainer">
      <div className="logo">
        <img className='logo-img' src={LOGO} alt="Music Logo" />
      </div>
      <div>
        <h1 className="title">Tune Quest</h1>

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