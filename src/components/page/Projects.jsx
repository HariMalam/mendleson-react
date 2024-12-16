import img1 from '../../assets/Our Project_ 1 img 1.svg';
import img2 from '../../assets/Our Project _ 2 img 1.svg';
import img3 from '../../assets/Our Project_ 3 img 1.svg';


function Projects() {
    return (
        <div className="page projects" id="projects">
            <div className="head">
                <h1>our projects</h1>
                <div className="line">
                    <div className="one"></div>
                    <div className="two"></div>
                </div>
            </div>

            <div className="main">
                <div className="sub1">
                    <img className="img-1" src={img1} alt="" />
                </div>
                <div className="sub2">
                    <img className="img-2" src={img2} alt="" />
                    <img className="img-3" src={img3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Projects
