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
                    Berea, KY / U.S.A
                </Info>

            </div>
            <div className="profile__contact">
                <a href="https://drive.google.com/file/d/1IWOgGfBUzHmFsz5Uj7J596WU5q0_TQyL/view?usp=sharing" target="_blank" rel="noreferrer">
                    <span>
                        Resume
                        </span>
                </a>
                <a href="mailto:ahad_zai@berea.edu">
                    <span>
                        Email
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
