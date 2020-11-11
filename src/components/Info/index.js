import React from 'react';
import './index.scss';

const Info = ({ icon }) => {
    return (
        <div className="info">
            <div className="property">
                <i className={`ion-ios-${icon}`} />
                <strong>
                    {icon}:
                </strong>
            </div>
            <span>Berea, KY / U.S.A</span>
        </div>
    );
};

export default Info;
