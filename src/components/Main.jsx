import About from './page/About'
import Clients from './page/Clients'
import Home from './page/Home'
import Projects from './page/Projects'
import Services from './page/Services'
import Team from './page/Team'
import Contact from './page/Contact'

function Main() {
    return (
        <main>
            <Home />
            <About />
            <Services />
            <Team />
            <Projects />
            <Clients />
            <Contact />
        </main>
    )
}

export default Main
