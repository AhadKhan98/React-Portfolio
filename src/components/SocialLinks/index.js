import React from 'react';
import './index.scss';

const SocialLinks = () => {
    return (
        <div className="social">
            <SocialLinks.Link
                url={'https://github.com/ahadkhan98'}
                type={'github'}
            />
            <SocialLinks.Link
                url={'https://www.linkedin.com/in/ahadzai/'}
                type={'linkedin'}
            />
        </div>
    );
};



SocialLinks.Link = ({ url, type }) => <a href={url} target="_blank" ><span className={`fab fa-${type}`} /></a>
    ;

export default SocialLinks;
