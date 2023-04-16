import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import Products from '../components/Product';
import Basket from '../components/Basket';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="miody" element={<Products />} />
            <Route path="inne" element={<Products />} />
            <Route path="koszyk" element={<Basket />} />
        </Routes>
    );
}

export default AppRoutes;
