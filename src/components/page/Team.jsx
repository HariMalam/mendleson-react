import jessica from '../../assets/Person 1 img 1.svg'
import johny from '../../assets/Person 2 img 1.svg'
import sanya from '../../assets/Person 3 img 1.svg'

import shape9 from '../../assets/shapes/Asset 5 1.svg'
import shape10 from '../../assets/shapes/Asset 8 2.svg'


function Team() {
    return (
        <div className="page team" id="team">
            <div className="shape shape-9">
                <img src={shape9} alt="" />
            </div>
            <div className="shape shape-10">
                <img src={shape10} alt="" />
            </div>

            <div className="head">
                <h1>our team</h1>
                <div className="line">
                    <div className="one"></div>
                    <div className="two"></div>
                </div>
            </div>
            <div className="main">
                <div className="member jessica">
                    <img src={jessica} alt="" />
                    <p>Jessica D&apos;suza</p>
                </div>
                <div className="member johny">
                    <img src={johny} alt="" />
                    <p>Johny Williams</p>

                </div>
                <div className="member sanya">
                    <img src={sanya} alt="" />
                    <p>Sanya R,</p>
                </div>
            </div>
        </div>
    )
}

export default Team
