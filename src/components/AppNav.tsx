import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './AppNav.css';
import { selectTotalQuantity } from '../store/cart/cartSlice';


const AppNav = (): JSX.Element => {

    const totalQuantity = useSelector(selectTotalQuantity);
    
    return (
        <div className="nav-container">
            <nav className="nav-side"></nav>
            <nav className="nav nav-main">
                <ul>
                    <li><Link to="/" className="nav-element">Strona Główna</Link></li>
                    <li><Link to="/sklep" className="nav-element">Sklep</Link></li>
                    <li><Link to="/koszyk" className="nav-element">Koszyk ({totalQuantity})</Link></li>
                </ul>
            </nav>
            <nav className="nav nav-side">
                <ul>
                    <li><Link to="/login" className="nav-element">Login</Link></li>
                    <li><Link to="/signup" className="nav-element">Rejestracja</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default AppNav;
