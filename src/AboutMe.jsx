
function AboutMe() {

    const style = {
        color: "inherit"
    }

    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    if (month > 10) {
        var age = year - 2004
    } else{
        age = age - 1
    }

    return(<><div className="about-me">
        <h1 className="about-me-header">About me</h1>
        <p className="about-me-text">I am a {age} year old student, currently pursing my studies at the
            <a href="https://www.ug.edu.ge/en" target="_blank" style={style}> University of Georgia </a> following the
        Bachelor's program of Informatics. Being born in Georgia, I have spent my whole life living here, though
        travelling is one of my hobbies. Another hobby of mine is singing. I am part of the choir "Mdzlevari", with
        which I have visited numerous countries around the world. I love being part of the community and taking part in
        group activities. I'm fond of working out at the gym, playing video games, listening to and playing
        classical music, taking part in sports, such as basketball, football, chess, table tennis, pool and many others.
        I greatly value punctuality, honesty and I always try to indulge with people of such virtues.
            <i styles> Experience: Error 404 (not found).</i> As of {year}, I have no professional experience, however I'm always
        trying to add to my intellectual experience by taking my free time to develop my knowledge as well as my persona.
        <i><b> To the reader: I hope, we have a future ahead of us.</b></i></p>
    </div>
        <div className="education">
            <h1 className="education-header">Skills</h1>
            <ul className="education-list">
                <li>Java</li>
                <li>C++</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Flask</li>
                <li>SpringBoot</li>
                <li>MySQL</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>MS Excel</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>

            </ul>
        </div>
        </>
    )
}

export default AboutMe;