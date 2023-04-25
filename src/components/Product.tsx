import { useState } from 'react';

import { CartItem, addToCart, addToTotalQuantity } from '../features/cart/cartSlice';
import { useAppDispatch } from '../app/hooks';
import './Product.css';

interface ProductProps {
    id: number,
    image_path: string,
    name: string,
}


const Product = (props: ProductProps): JSX.Element => {

    const [precart, setPrecart] = useState<CartItem>({
        id: props.id,
        quantity: 0,
    });

    const dispatch = useAppDispatch();

    const incrementProductQuantity = (): void => {
        setPrecart({...precart, quantity: precart.quantity + 1});
    }

    const decrementProductQuantity = (): void => {
        if (precart.quantity > 0) {
            setPrecart({...precart, quantity: precart.quantity - 1});
        } 
    }

    const addToCartAndResetPrecart = (): void => {
        dispatch(addToCart(precart));
        dispatch(addToTotalQuantity(precart));
        setPrecart({...precart, quantity: 0});
    }

    return (
        <li className="product-wrapper">
            <img className="image" src={require('../assets/' + props.image_path)} alt={props.name} />
            <h3 className="product-name">{props.name}</h3>
            <div className="buy-product">
                <button className="button" onClick={decrementProductQuantity}>-</button>
                <span className="counter">{precart.quantity}</span>
                <button className="button" onClick={incrementProductQuantity}>+</button>
                <button className="button" onClick={addToCartAndResetPrecart}>Dodaj do koszyka</button>
            </div>
        </li>
    );
}

export default Product;
