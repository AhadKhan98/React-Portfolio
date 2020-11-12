import React from 'react';
import './index.scss';
import Slider from "../../../components/Slider";

const WorkItem = ({ images, title, sourceCodeLink, demoLink, description, technologies }) => {
    return (
        <div className="work-item">
            <Slider
                images={images}
                classNames={'work-item__slider'}
            />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="work-item__links">
                <a href={sourceCodeLink} className="work-item__source-code"><i className="fas fa-code" />Source Code</a>
                <a href={demoLink} className="work-item__demo"><i className="fas fa-rocket" />Demo</a>
            </div>
            <div className="skills">
                <ul >
                    {technologies.map(tech => (
                        <li>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WorkItem;
