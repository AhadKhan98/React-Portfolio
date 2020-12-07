import React from 'react';
import './index.scss';
import Slider from "../../../components/Slider";



const WorkItem = ({ image, title, sourceCodeLink, description, technologies }) => {
    return (
        <div className="work-item">
            <h2>{title}</h2>
            <img className="work-item__img" src={image}></img>

            <p>{description}</p>
            <div className="work-item__links">
                <div className="skills">
                    <h6>TECHNOLOGIES USED:</h6>
                    <ul >
                        {technologies.map(tech => (
                            <li>{tech}</li>
                        ))}
                    </ul>
                </div>
                <a href={sourceCodeLink} target="_blank" className="work-item__source-code">
                    <i className="fas fa-code"><p>Source Code</p></i>
                </a>
            </div>


        </div>
    );
};

export default WorkItem;
