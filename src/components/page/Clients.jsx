import c1 from '../../assets/logo/Layer 19.svg'
import c2 from '../../assets/logo/Layer 20.svg'
import c3 from '../../assets/logo/1280px-Brigitte-Logo.svg'
import c4 from '../../assets/logo/Layer 22.svg'
import c5 from '../../assets/logo/BHP_2017_logo.svg'
import c6 from '../../assets/logo/Layer 21.svg'
import c7 from '../../assets/logo/Layer 23.svg'
import c8 from '../../assets/logo/Layer 24.svg'
import c9 from '../../assets/logo/MelbourneWaterLogo-1024x282.svg'

import shape11 from '../../assets/shapes/Assets 9 1.svg'

function Clients() {
    return (
        <div className="page clients" id="clients">

            <div className="shape shape-11">
                <img src={shape11} alt="" />
            </div>

            <div className="head">
                <h1>our clients</h1>
                <div className="line">
                    <div className="one"></div>
                    <div className="two"></div>
                </div>
            </div>

            <div className="main">
                <img src={c1} alt="Company Logo 1" />
                <img src={c2} alt="Company Logo 2" />
                <img src={c3} alt="Company Logo 3" />
                <img src={c4} alt="Company Logo 4" />
                <img src={c5} alt="Company Logo 5" />
                <img src={c6} alt="Company Logo 6" />
                <img src={c7} alt="Company Logo 7" />
                <img src={c8} alt="Company Logo 8" />
                <img src={c9} alt="Company Logo 9" />
            </div>
        </div>
    )
}

export default Clients
