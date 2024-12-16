import img from '../../assets/home.svg'

import shape3 from '../../assets/shapes/Assets 4.svg'
import shape4 from '../../assets/shapes/Graphic 1 2.svg'
import shape5 from '../../assets/shapes/Assets 3.svg'

function Home() {
    return (
        <div className="page home" id="home">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="content">
                <h1>Mendleson Communication and Engagement</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, ut quam volutpat,
                    tortor.</p>
            </div>

            <div className="shape shape-3">
                <img src={shape3} alt="" />
            </div>
            <div className="shape shape-4">
                <img src={shape4} alt="" />
            </div>
            <div className="shape shape-5">
                <img src={shape5} alt="" />
            </div>
        </div>
    )
}

export default Home
