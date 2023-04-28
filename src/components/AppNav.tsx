import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './AppNav.css';
import { selectTotalQuantity } from '../store/cart/cartSlice';


const AppNav = (): JSX.Element => {

    const totalQuantity = useSelector(selectTotalQuantity);
    
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/" className="navElement">Strona Główna</Link></li>
                <li><Link to="/sklep" className="navElement">Sklep</Link></li>
                <li><Link to="/koszyk" className="navElement">Koszyk ({totalQuantity})</Link></li>
            </ul>
        </nav>
    );
}

export default AppNav;
