import React, { useContext } from 'react';
import './index.scss'
import profilepic from '../../assets/profile.png'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";

const Profile = () => {

    return (
        <div className="profile">
            <div className="profile__banner">
                <img src={profilepic} alt="Profile Picture" />
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    Ahad Zai
                </div>
                <TypedText
                    dataText={
                        [
                            'Senior JavaScript Engineer',
                            'Frontend Development',
                            'Backend Development'
                        ]
                    }
                />
                <SocialLinks />
                <Info icon="location">
                    KYIV / ISTANBUL
                </Info>

            </div>
            <div className="profile__contact">
                <a href="https://drive.google.com/file/d/1KS59x7gIOht-r6pZ3DaV5kDDxSsqXNML/view?usp=sharing" target="_blank" rel="noreferrer">
                    <span>
                        Download CV
                        </span>
                </a>
                <a href="mailto:3mr3baskan@gmail.com">
                    <span>
                        Contact Me
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
