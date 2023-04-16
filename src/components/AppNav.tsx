import { Link } from 'react-router-dom';

import './AppNav.css';


const AppNav = (): JSX.Element => {
    
    return (
        <nav className="nav">
            <h1>Wybierz produkt</h1>
            <ul>
                <li><Link to="/" className="navElement">Strona Główna</Link></li>
                <li><Link to="/miody" className="navElement">Miody</Link></li>
                <li><Link to="/inne" className="navElement">Inne produkty pszczele</Link></li>
                <li><Link to="/koszyk" className="navElement">Koszyk</Link></li>
            </ul>
        </nav>
    );
}

export default AppNav;
