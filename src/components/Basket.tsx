import { CartState } from '../features/cart/cartSlice';
import { store } from '../app/store';
import productJson from '../productConfig.json';
import './Basket.css';


const Basket = (): JSX.Element => {

    const state: CartState = store.getState();
    const cartItemKeys: string[] = Object.keys(state);

    const productMapping = productJson.products;
    
    return (
        <div className="cart-state">
            <h3>Stan koszyka</h3>
            <ul className="cart">
                {cartItemKeys.map(key => {
                    const name = productMapping.find(({ product_id }) => product_id === parseInt(key))?.name;
                    return (
                        <li key={key}>{name}: {state[parseInt(key)].quantity}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Basket;
