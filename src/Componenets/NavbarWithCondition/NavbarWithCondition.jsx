import React, { memo } from 'react'
import AppNavbar from '../AppNavbar/AppNavbar';
import { useLocation } from 'react-router-dom';



function NavbarWithCondition() {
    const location = useLocation();

    const isLoginPage = location.pathname === '/';

    return (
        <>
            {!isLoginPage && <AppNavbar />}
        </>
    );
}

export default memo(NavbarWithCondition)