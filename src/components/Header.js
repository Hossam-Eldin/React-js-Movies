import React from 'react'
import { Link } from 'react-router-dom'
import FilterList from './search';
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
        <nav>
            <ul>
                {/*<li><Link to='/'>Home</Link></li>*/}
                <li><Link to='/movie'>Movies</Link></li>
                <li><FilterList/></li>
            </ul>
        </nav>
    </header>
)

export default Header
