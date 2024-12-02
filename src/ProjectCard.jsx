import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
function ProjectCard(props) {

    const styles = {
        color: "hsla(49, 67%, 92%, 0.87)"
}


    return (
        <div className='card'>
            <a href={props.projectUrl} target="_blank"><FaGithub size={30} className="github-icon" style={styles}/></a>
            <h2 className="card-title">{props.projectName}</h2>
            <a href={props.projectUrl} target="_blank"><img className="card-image" src={props.projectImg} alt="Image"/></a>
            <p className='card-text'>{props.projectDescription}</p>
        </div>
    );
}

ProjectCard.propTypes = {
    projectName: PropTypes.string,
    projectImg: PropTypes.string,
    projectDescription: PropTypes.string,
    projectUrl: PropTypes.string
}

export default ProjectCard;