import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import BgBubbles from "./components/BgBubbles";
import Profile from "./components/Profile";

import Menu from "./components/Menu";
import About from "./pages/About";

import {
    HashRouter as Router,
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Education from './pages/Education';
import BackToTop from "./components/BackToTop";


const routes = [
    { path: '/', name: 'About', Component: About },
    { path: '/resume', name: 'Resume', Component: Resume }
]

function App() {
    return (
        <>
            <BackToTop />
            <div className="page-wrap">
                <BgBubbles />
                <Router>
                    <div className="container">
                        <Menu />
                        <Profile />
                        <AnimatedRoutes />
                    </div>
                </Router>
            </div>
        </>
    );
}

const AnimatedRoutes = withRouter(({ location }) =>
    <TransitionGroup className="transition-wrapper">
        <CSSTransition
            classNames="transition"
            timeout={1000}
            unmountOnExit
            key={location.pathname}
        >

            <Switch>
                <Route exact path="/">
                    <About />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/experience">
                    <Resume />
                </Route>
                <Route exact path="/projects">
                    <Works />
                </Route>
                <Route exact path="/credentials">
                    <Contact />
                </Route>
                <Route exact path="/education">
                    <Education />
                </Route>
            </Switch>
        </CSSTransition>
    </TransitionGroup>
);

export default App;
