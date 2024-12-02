import React, {useState} from "react";
import Header from './Header';
import BodyMain from "./BodyMain.jsx";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
function App() {

    const [activeSection, setActiveSection] = useState("AboutMe");

    function changeSection(section) {
        setActiveSection(section);
    }
    return(
        <>
            <Header changeSection={changeSection}/>
            <BodyMain activeSection={activeSection}/>
            <Footer/>
        </>
    )

}

export default App
