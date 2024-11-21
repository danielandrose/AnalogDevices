import '../cssFiles/responsive.css'
import '../cssFiles/header.css'
function Header(){
    return (
        <header>
            <div className="header-content">
                <h2>Prevention is better then cure</h2>
                <div className="line"></div>
                <h1>ADVANCED ACCIDENT PREVENTION SYSTEM</h1>
                <a href="#" className="ctn">Learn More</a>
            </div>
        </header>
    )
}

export default Header;