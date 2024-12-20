import logo from '../assets/logo.svg'

function Header() {
    return (
            <header className="flex justify-between py-[0.9375rem] px-[8.125rem] z-[100] custom-1200:px-[2.125rem] custom-924:flex-wrap custom-576:px-[1.125rem]">
            <img className="logo w-[18.4375rem] h-auto" src={logo} alt="logo" />
            <nav className="flex items-center justify-end">
                <ul className="flex list-none gap-[2.1875rem]">
                    <li className="hover: "><a href="#about">About Us</a></li>
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
