import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='homepage'>
           <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
            {/* <Link></Link> */}
        </div>
    );
};

export default Header;