import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Project from "../components/Projects"
import "../styles/LandingPage.css"

function LandingPage(){
    return(
        <div className="landing-container">

            <div className="navbar">
                <Navbar/>
            </div>
            
            <div className="section">
                <Hero/>
            </div>

            <div className="section">
                <Project/>
            </div>
        </div>
    )
}
export default LandingPage;