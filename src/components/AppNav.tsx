import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './AppNav.css';
import { CartState } from '../store/cart/cartSlice';


const AppNav = (): JSX.Element => {
    
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/" className="navElement">Strona Główna</Link></li>
                <li><Link to="/sklep" className="navElement">Sklep</Link></li>
                <li><Link to="/koszyk" className="navElement">Koszyk ({useSelector((state: CartState) => state.totalQuantity)})</Link></li>
            </ul>
        </nav>
    );
}

export default AppNav;
