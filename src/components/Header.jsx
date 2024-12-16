import logo from '../assets/logo.svg'

function Header() {
    return (
        <header>
            <img className="logo" src={logo} alt="logo" />
            <nav>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#clients">Clients</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
