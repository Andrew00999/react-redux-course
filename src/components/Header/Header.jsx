import React from 'react'
import { NavLink } from 'react-router-dom';
import Favorite from '@components/Favorite'

import sl from './Header.module.scss';

const Header = () => {
    return (
        <header className={sl.container}>
            <ul className={sl.header_list}>
                <div>
                    <li>
                        <NavLink to='/' exact="true">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/people/?page=1'>People</NavLink>
                    </li>
                    <li>
                        <NavLink to='/not-found' exact="true">Error</NavLink>
                    </li>
                </div>
                <li className={sl.favorite__link}>
                    <NavLink to='/favorite'>
                        <Favorite />
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header;