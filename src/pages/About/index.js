import React from 'react';
import './index.scss';
import Title from "../common/Title";
import Skills from '../../components/Skills';

const About = () => {
    return (
        <div className="page" id="about">
            <Title>
                About Me
            </Title>
            <div className="row">
                <div className="column">
                    <p>
                        I am a highly motivated, and a self-taught Software Engineer.
                        <br /> <br />
                        When I was a child, I would break apart various devices and toys simply to disinter their internal workings and scrutinize their core mechanisms. As I grew older, the inquisitiveness became more potent and thus led me to explore different aspects of Computer Science and develop a meticulous understanding of its prominent facets, such as, Software Engineering, Data Science, Web Development, and Mobile-App Development.
                        <br /><br />
                        I am an easy-going person, and very adaptable at the same time. Working alongside new teams is something that I not only am comfortable with, but greatly enjoy.
                        <br /><br />
                        With a strong belief in lifelong learning for both personal and professional reasons, nothing brings me more joy than learning about something that is completely new to me. Whether that be a new programming language, or a new chess opening.
                    </p>
                </div>
            </div>

            <Title>
                Technical Skills
            </Title>
            <Skills />
        </div>
    );
};

export default About;
