import React from 'react';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "../Resume/Item";

import CollegeLogo from '../../assets/bclogo.png';

const Education = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-university'}>
                Education
            </Title>
            <ResumeItem
                date={'2017 – 2021'}
                title={'Berea College'}
                company={'Berea, Kentucky  / U.S.A'}
                logo={CollegeLogo}
            >
                Bachelor's Degree in Software Engineering
            </ResumeItem>

        </div>
    )
}

export default Education;