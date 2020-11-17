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
                        I am a highly motivated, and self-taught Software Engineer.
                        <br /> <br />
                        My passion for engineering goes all the way back to my childhood, as I would break apart various devices and toys simply to disinter their internal workings and scrutinize their core mechanisms. As I grew older, the inquisitiveness became more potent and thus led me to explore different aspects of Software Engineering and develop a meticulous understanding of its prominent facets, such as, Mobile-App Development, Web Development, Front End Engineering, Back End Engineering, and Database Management.
                        <br /><br />
                        I am an easy-going and adaptable person; I thoroughly enjoy working alongside new teams as it provides me with more opportunities to learn.
                        <br />
                        With a strong belief in lifelong learning for both personal and professional reasons, nothing brings me more joy than discovering new concepts. Whether that be a new programming language, or a new chess opening.
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
