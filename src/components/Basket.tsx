import { useAppDispatch, useAppSelector } from '../app/hooks';

import { removeFromCart } from '../store/cart/cartSlice';
import { CartState } from '../types/cartSliceTypes';
import { store } from '../app/store';
import productJson from '../productConfig.json';
import './Basket.css';
import { Customer } from '../types/customerSliceTypes';

interface FullStore {
    cart: CartState,
    customer: Customer,
}


const Basket = (): JSX.Element => {

    const cartAndCustomer: FullStore = store.getState();
    const items = cartAndCustomer.cart.cartItems;
    const cartItemKeys: string[] = Object.keys(items);
    const dispatch = useAppDispatch();

    const totalQuantity = useAppSelector((state) => state.cart.totalQuantity)
    const productMapping = productJson.products;
    
    return (
        <div className="cart-state">
            <h3>Stan koszyka: {totalQuantity}</h3>
            <ul className="cart">
                {cartItemKeys.map(key => {
                    const name = productMapping.find(({ product_id }) => product_id === parseInt(key))?.name;
                    const item = items[parseInt(key)];
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
