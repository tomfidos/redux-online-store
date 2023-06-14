import { Link } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';
import './AppNav.css';


const AppNav = (): JSX.Element => {

    const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
    const isLogged = useAppSelector((state) => state.customer.isLogged);
    
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
            {!isLogged &&
                <nav className="nav nav-side">
                    <ul>
                        <li><Link to="/login" className="nav-element">Login</Link></li>
                        <li><Link to="/signup" className="nav-element">Rejestracja</Link></li>
                    </ul>
                </nav>
            }
            {isLogged &&
            <div className="nav nav-side">
                <button>Logout</button>
            </div>
            }
        </div>
    );
}

export default AppNav;
