import facebook from '../../assets/facebook 1.svg'
import linkedin from '../../assets/linkedin 1.svg'
import google from '../../assets/Group 20.svg'

function Contact() {
    return (
        <div className="page contact" id="contact">
            <div className="section social">
                <div className="head">
                    <h3>Social</h3>
                </div>
                <div className="name">
                    <ul>
                        <li style={{ listStyleImage: `url(${facebook})` }}>Facebook</li>
                        <li style={{ listStyleImage: `url(${linkedin})` }}>LinkedIn</li>
                        <li style={{ listStyleImage: `url(${google})` }}>Google +</li>
                    </ul>
                </div>
            </div>
            <div className="section explore">
                <h3>Explore</h3>
                <ul>
                    <li>Services</li>
                    <li>Team</li>
                    <li>Clents</li>
                </ul>
            </div>
            <div className="section">
                <h3>Contact</h3>
                <ul>
                    <li>Lorem Ipsum dummy address </li>
                    <li>used for display</li>
                    <li>1234567890</li>
                </ul>
            </div>
            <div className="section email">
                <h3>Email</h3>
                <ul>
                    <li>mendlesoncommunication@email.com</li>
                </ul>
            </div>
        </div>
    )
}

export default Contact
