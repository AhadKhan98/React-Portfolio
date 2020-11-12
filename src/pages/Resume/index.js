import React from 'react';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";

import mlh from '../../assets/mlh.jpg';
import bc from '../../assets/logo.png';
import iupui from '../../assets/iupui.png';

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-briefcase'}>
                Work Experience
            </Title>
            <ResumeItem
                date={'Sep 2020 - Dec 2020'}
                title={'Software Engineer Fellowship'}
                company={'MLH - Major League Hacking'}
                logo={mlh}
            >
                <li> Deployed 6 fully functional Open-Sourced projects ready for contributions   </li>
                <li> Utilized a wide array of technologies including Python, JavaScript, React, React-Native, TensorFlow, C# </li>
                <li> Follwed good coding and git practices including clean code, documentation and maintaining a commit history </li>
                <li> Effectively communicating with other fellows and mentors and making sure our projects meet the deadlines </li>
            </ResumeItem>
            <ResumeItem
                date={'Aug 2019 – Present'}
                title={'Full-Stack Student Programmer'}
                company={'Berea College'}
                logo={bc}
            >
                <li> Creating automation software to minimize manual officework </li>
                <li> Developing scalable web applications which will be used by 2000+ students and staff members </li>
                <li> Developing and connecting backend and frontend technologies in the creation of complete web applications </li>
                <li> Collaborating with 10+ programmers in an agile environment and developing software </li>
            </ResumeItem>
            <ResumeItem
                date={'May 2019 – July 2019'}
                title={'Software Engineer Intern'}
                company={'Indiana University-Purdue University'}
                logo={iupui}
            >
                <li>Developed 3 programs that would diagnose the severity of dental diseases based on patients’ history </li>
                <li>Performed mass operations on Big Data to analyze, extract and manipulate data </li>
                <li>Converted free-text data of over 50,000+ patients into structured format by developing various data mining and data cleaning scripts and using natural language processing libraries</li>
            </ResumeItem>

        </div>
    );
};

export default Resume;
