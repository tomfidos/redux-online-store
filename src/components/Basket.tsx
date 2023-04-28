import { useAppDispatch } from '../app/hooks';
import { useSelector } from 'react-redux';

import { CartState, removeFromCart } from '../store/cart/cartSlice';
import { store } from '../app/store';
import productJson from '../productConfig.json';
import './Basket.css';


const Basket = (): JSX.Element => {

    const cart: CartState = store.getState();
    const cartItemKeys: string[] = Object.keys(cart.cartItems);
    const dispatch = useAppDispatch();

    const productMapping = productJson.products;
    
    return (
        <div className="cart-state">
            <h3>Stan koszyka: {useSelector((state: CartState) => state.totalQuantity)}</h3>
            <ul className="cart">
                {cartItemKeys.map(key => {
                    const name = productMapping.find(({ product_id }) => product_id === parseInt(key))?.name;
                    const item = cart.cartItems[parseInt(key)];
                    return (
                        <div key={key} className="cart-item">
                            <li>{name}: {item.quantity}</li>
                            <button onClick={() => dispatch(removeFromCart(item))}>usuń</button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default Basket;
