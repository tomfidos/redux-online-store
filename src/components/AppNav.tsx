import { Link } from 'react-router-dom';

import './AppNav.css';


const AppNav = (): JSX.Element => {
    
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/" className="navElement">Strona Główna</Link></li>
                <li><Link to="/sklep" className="navElement">Sklep</Link></li>
                <li><Link to="/koszyk" className="navElement">Koszyk</Link></li>
            </ul>
        </nav>
    );
}

export default AppNav;
