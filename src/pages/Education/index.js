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
                <li> Bachelor of Arts - BA, Computer Science </li>
                <li> Awarded Full-Tuition Scholarship  </li>
                <li> Cumulative GPA: 3.4 </li>
            </ResumeItem>

        </div>
    )
}

export default Education;