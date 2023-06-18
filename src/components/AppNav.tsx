import { Link } from 'react-router-dom';
import axios from 'axios';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import './AppNav.css';
import { setLoginStatusAndData } from '../store/customer/customerSlice';

const LOGOUT = 'https://akademia108.pl/api/social-app/user/logout';


const AppNav = (): JSX.Element => {

    const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
    const isLogged = useAppSelector((state) => state.customer.isLogged);
    const dispatch = useAppDispatch();

    const logoutUser = () => {
        axios
            .post(LOGOUT)
            .then(() => {
                dispatch(setLoginStatusAndData({ isLogged: false, jwt_token: null }));
            })
            .catch(error => console.error(error));
    }
    
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
                <div className="nav nav-side logout">
                    <span className="nav-element" onClick={logoutUser}>Logout</span>
                </div>
            }
        </div>
    );
}

export default AppNav;
