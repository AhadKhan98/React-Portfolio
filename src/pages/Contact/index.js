import React from 'react';
import Title from "../common/Title";
import Item from './Item';
import { certificates } from './data';

import './index.css';

const Contact = () => {
    return (
        <div className="page" id="contact">

            <Title>
                Certifications & Awards
            </Title>
            <br />

            <div className="certificates">
                {certificates.map(c =>
                    (
                        <div className="item">
                            <Item {...c}></Item>
                            <div className="line"></div>
                            <br />
                        </div>

                    )

                )}

            </div>


        </div >
    );
};

export default Contact;
