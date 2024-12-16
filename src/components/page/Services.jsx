import engagement from '../../assets/Engagement vector 1.svg';
import communication from '../../assets/Coominucation vector 1.svg'
import facilitation from '../../assets/facilation vector 1.svg'
import consultation from '../../assets/Consultation vector 1.svg'
import training from '../../assets/Training and vector 1.svg'

import shape6 from '../../assets/shapes/Asset 5 1.svg'
import shape7 from '../../assets/shapes/Asset 6 1.svg'
import shape8 from '../../assets/shapes/Asset 8 2.svg'



function Services() {
    return (
        <div className="page services" id="services">
            <div className="shape shape-6">
                <img src={shape6} alt="" />
            </div>
            <div className="shape shape-7">
                <img src={shape7} alt="" />
            </div>
            <div className="shape shape-8">
                <img src={shape8} alt="" />
            </div>

            <div className="head">
                <h1>SERVICES</h1>
                <div className="line">
                    <div className="one"></div>
                    <div className="two"></div>
                </div>
            </div>

            <div className="main">
                <div className="engagement service">
                    <div className="content">
                        <h2>Engagement</h2>
                        <p>
                            We love what we do and are driven by achieving great results for our clients. Our awards
                            and
                            impressive client list are testament to our high quality approach. We deliver value,
                            creaKvity,
                            results and excepKonal levels of customer service and professionalism. We specialise in
                            infrastructure development, energy and natural resources.
                        </p>
                    </div>
                    <div className="img">
                        <img src={engagement} alt="" />
                    </div>
                </div>
                <div className="communication service">
                    <div className="content">
                        <h2>Communications</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas
                            orci.
                            Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.
                        </p>
                    </div>
                    <div className="img">
                        <img src={communication} alt="" />
                    </div>
                </div>
                <div className="facilitation service">
                    <div className="content">
                        <h2>Facilitation</h2>
                        <p>
                            We love what we do and are driven by achieving great results for our clients. Our awards
                            and
                            impressive client list are testament to our high quality approach. We deliver value,
                            creaKvity,
                            results and excepKonal levels of customer service and professionalism. We specialise in
                            infrastructure development, energy and natural resources.
                        </p>
                    </div>
                    <div className="img">
                        <img src={facilitation} alt="" />
                    </div>

                </div>

                <div className="consultation service">
                    <div className="content">
                        <h2>Consultation and Research</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas
                            orci.
                            Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.
                        </p>
                    </div>
                    <div className="img">
                        <img src={consultation} alt="" />
                    </div>
                </div>
                <div className="training service">
                    <div className="content">
                        <h2>Training &amp; Mentoring</h2>
                        <p>
                            We love what we do and are driven by achieving great results for our clients. Our awards
                            and
                            impressive client list are testament to our high quality approach. We deliver value,
                            creaKvity,
                            results and excepKonal levels of customer service and professionalism. We specialise in
                            infrastructure development, energy and natural resources.
                        </p>
                    </div>
                    <div className="img">
                        <img src={training} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
