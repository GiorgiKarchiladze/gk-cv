import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx";
import Education from "./Education.jsx";
function BodyMain({ activeSection }){
    return(
        <main>
            {activeSection === "AboutMe" && <AboutMe/>}
            {activeSection === "Projects" && <Projects/>}
            {activeSection === "Education" && <Education/>}
        </main>
    )
}
export default BodyMain;