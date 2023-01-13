import React from "react"

export default function ProjectPage(props){
    function getBgColor(color){
        return 'projectsContainer '+ color
    }
    return (
        <div className="ProjectPageContainer" id="projects">
            <div className={getBgColor(props.project1.backgroundColor)}>
                <a href={props.project1.link} target='_blank' className="projectTitle">{props.project1.title}</a>
                <div className="project">
                    <img src={props.image1} alt="Personal Dashboard Image" />
                    <ul>
                        <li>{props.project1.description[0]}</li>
                        <li>{props.project1.description[1]}</li>
                        <li>{props.project1.description[2]}</li>
                    </ul>
                    <a href={props.project1.link} target="_blank">LINK</a>
                </div>
            </div>
            <div className={getBgColor(props.project2.backgroundColor)}>
                <a href={props.project2.link} target='_blank' className="projectTitle">{props.project2.title}</a>
                    <div className="project">
                    <img src={props.image2} alt="Personal Dashboard Image" />
                    <ul>
                        <li>{props.project2.description[0]}</li>
                        <li>{props.project2.description[1]}</li>
                        <li>{props.project2.description[2]}</li>
                    </ul>
                    <a href={props.project2.link} target="_blank">LINK</a>
                </div>
            </div>
        </div>
    )
}