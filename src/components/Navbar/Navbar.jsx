import "./Navbar.css";
import useActiveNav from "../../Hooks/useActiveNav";
import useHandleScroll from "../../Hooks/useHandleScroll";
import { BsTelephonePlus } from "react-icons/bs";
import { navbarItems } from "../../Data/NavbarItems";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Button } from "../index";
import { Link } from "react-scroll";

const Navbar = () => {
  const {active, navRef, barRef, closeRef, handleClick} = useActiveNav();
  const {nav, handleScroll} = useHandleScroll();

  window.addEventListener("scroll", handleScroll);

  return (
    <nav className= {nav ? "navbar sticky_navbar" : "navbar"}>
      <span ref={barRef} onClick={ handleClick} className="nav_bars">
        <HiBars3 />
      </span>
      <span ref={closeRef} onClick={ handleClick} className="nav_close">
        <HiXMark />
      </span>
      <div className="navbar-nav">
        <div className="navbar_logo"><Link className= {nav ? "sticky_navbar_logo" : ""} to="/">First</Link></div>
        <ul ref={navRef} className="navbar_menu">
          {navbarItems.map((item) => (
            <li key={item.id} className="nav-item">
              <Link to={item.url} smooth={true} offset={-100} duration={500}
                    className={`${active === item.id ? "active" : ""} ${nav ? "sticky_item" : ""}`}
                    onClick={(e) => handleClick(e, item.id)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar_contact">
        <span className={nav ? "nav_icon sticky_nav_icon" : "nav_icon"}>
          <BsTelephonePlus />
        </span>
        <Link to= "contact" smooth={true} offset={-100} duration={500} >
          <Button clas= {nav ? "navbar_btn sticky_nav_btn" : "navbar_btn"} ref="/" title="120-240-9600"/>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;