import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import Products from '../components/Products';
import Basket from '../components/Basket';
import Login from '../views/Login';
import Signup from '../views/Signup';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sklep" element={<Products />} />
            <Route path="koszyk" element={<Basket />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
        </Routes>
    );
}

export default AppRoutes;
