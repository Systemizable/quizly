import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation, Outlet } from 'react-router-dom';
import './PageTransition.css';

const PageTransition = () => {
    const location = useLocation();

    return (
        <SwitchTransition>
            <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={400}
                unmountOnExit
            >
                <div>
                    <Outlet />
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
};

export default PageTransition;
