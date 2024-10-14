import '../cssFiles/navbar.css'
import menu from '../images/menu-btn.png';
import {useState} from 'react'
function NavBar(){
    const [isActive, setIsActive] = useState(false);
    function respond(){
        setIsActive(prev => !prev);
    }
    return (
        <nav className="navbar">
            <div>
                <h1 className="logo">ACCIDENT PREVENTION</h1>
            </div>
            <div>
                <ul className={`nav-links ${isActive ? 'mobile-menu' : ''}`}>
                    <li className='active'><a href="#">Home</a></li>
                    <li><a href="#">Monitor</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#" className="ctn">Sign in</a></li>
                </ul>
            </div>
            <img src={menu} onClick={respond} className="menu-btn" />
        </nav>
    )
}

export default NavBar