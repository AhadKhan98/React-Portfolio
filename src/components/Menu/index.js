import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './index.scss';

const Menu = () => {
    return (
        <ul className="menu">
            <Menu.Item
                name={"person"}
                link="/about"
            >
                About
            </Menu.Item>
            <Menu.Item
                name={"android-list"}
                link="/experience"
            >
                Experience
            </Menu.Item>
            <Menu.Item
                name={'paintbrush'}
                link="/projects"
            >
                Projects
            </Menu.Item>
            <Menu.Item
                name={'trophy'}
                link="/credentials"
            >
                Credentials
            </Menu.Item>
        </ul>
    );
};

Menu.Item = ({ link = '#', children, name }) =>
    <li>
        <NavHashLink
            smooth
            to={link}
            activeClassName={'active'}
            exact>
            <span className={`icon ion-${name}`} />
            {children}
        </NavHashLink>
    </li>;

export default Menu;
