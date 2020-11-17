import React from 'react';
import './index.scss';

const ResumeItem = ({ img, date, title, company, link, }) => {
    return (
        <div className="certificate">
            <img src={img} />

            <div className="resume-item__company">
                <p>{title}</p>
                <h3>{company}</h3>
                <div className="resume-item__date">
                    {date}
                </div>
                <br />
                <a href={link} target="_blank">View Credential</a>
            </div>




        </div>

    );
};

export default ResumeItem;
