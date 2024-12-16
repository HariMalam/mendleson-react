import about from "../../assets/about_us.svg";
import engagement from "../../assets/Enagagement icon 1.svg";
import communication from "../../assets/coomunication icon 1.svg";


function About() {
    return (
        <div className="page about" id="about">
            <div className="head">
                <div className="obj1"></div>
                <div className="obj2">
                    <h1>ABOUT US</h1>
                    <div className="line">
                        <div className="one"></div>
                        <div className="two"></div>
                    </div>
                </div>
            </div>

            <div className="main">
                <div className="img">
                    <img src={about} alt="about" />
                </div>
                <div className="content">
                    <p>
                        We love what we do and are driven by achieving great results for our clients. Our awards and
                        impressive client list are testament to our high quality approach. We deliver value,
                        creativity,
                        results and exceptional levels of customer service and professionalism. We specialise in
                        infrastructure development, energy and natural resources.
                    </p>

                    <div className="services">
                        <div className="engagement service">
                            <img src={engagement} alt="" />
                            <h2>Engagement</h2>
                            <p>We are engagement specialists, who have led projects at all levels of the IAP2
                                spectrum.
                                <span>READ MORE</span>
                            </p>
                        </div>
                        <div className="communication service">
                            <img src={communication} alt="" />
                            <h2>Communications</h2>
                            <p>We are award-winning leaders in communications and campaign management. <span>READ
                                MORE</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
