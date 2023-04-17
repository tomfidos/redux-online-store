import { useAppDispatch } from '../app/hooks';
import { store } from '../app/store';
import { decrementProductQuantity, incrementProductQuantity, addToCart } from '../features/cart/cartSlice';
import './Products.css';


const Products = (): JSX.Element => {

    const state = store.getState();
    const dispatch = useAppDispatch();
    
    return (
        <ul className="gallery">
            <li className="product-wrapper" key="1">
                <img className="image" src={require('../assets/rzepak.jpg')} alt="rzepakowy" />
                <h3 className="product-name">Miód rzepakowy</h3>
                <div className="buy-product">
                    <button className="button" onClick={() => dispatch(decrementProductQuantity(1))}>-</button>
                    <span className="counter">{state.precart[1].quantity}</span>
                    <button className="button" onClick={() => dispatch(incrementProductQuantity(1))}>+</button>
                    <button className="button" onClick={() => dispatch(addToCart(1))}>Dodaj do koszyka</button>
                </div>
            </li>
            <li className="product-wrapper" key="2">
                <img className="image" src={require('../assets/wielokwiat.jpg')} alt="wielokwiat" />
                <h3 className="product-name">Miód wielokwiatowy</h3>
                <div className="buy-product">
                    <button className="button" onClick={() => dispatch(decrementProductQuantity(2))}>-</button>
                    <span className="counter">{state.precart[2].quantity}</span>
                    <button className="button" onClick={() => dispatch(incrementProductQuantity(2))}>+</button>
                    <button className="button" onClick={() => dispatch(addToCart(2))}>Dodaj do koszyka</button>
                </div>
            </li>
            <li className="product-wrapper" key="3">
                <img className="image" src={require('../assets/gryczany.jpg')} alt="gryczany" />
                <h3 className="product-name">Miód gryczany</h3>
                <div className="buy-product">
                    <button className="button" onClick={() => dispatch(decrementProductQuantity(3))}>-</button>
                    <span className="counter">{state.precart[3].quantity}</span>
                    <button className="button" onClick={() => dispatch(incrementProductQuantity(3))}>+</button>
                    <button className="button" onClick={() => dispatch(addToCart(3))}>Dodaj do koszyka</button>
                </div>
            </li>
        </ul>
    );
}

export default Products;
