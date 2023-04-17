import './Products.css';


const Products = (): JSX.Element => {
    
    return (
        <ul className="gallery">
            <li className="product-wrapper" key="1">
                <img className="image" src={require('../assets/rzepak.jpg')} alt="rzepakowy" />
                <h3 className="product-name">Miód rzepakowy</h3>
                <div className="buy-product">
                    <button className="button">-</button>
                    <span></span>
                    <button className="button">+</button>
                    <button className="button">Dodaj do koszyka</button>
                </div>
            </li>
            <li className="product-wrapper" key="2">
                <img className="image" src={require('../assets/wielokwiat.jpg')} alt="wielokwiat" />
                <h3 className="product-name">Miód wielokwiatowy</h3>
                <div className="buy-product">
                    <button className="button">-</button>
                    <span></span>
                    <button className="button">+</button>
                    <button className="button">Dodaj do koszyka</button>
                </div>
            </li>
            <li className="product-wrapper" key="3">
                <img className="image" src={require('../assets/gryczany.jpg')} alt="gryczany" />
                <h3 className="product-name">Miód gryczany</h3>
                <div className="buy-product">
                    <button className="button">-</button>
                    <span></span>
                    <button className="button">+</button>
                    <button className="button">Dodaj do koszyka</button>
                </div>
            </li>
        </ul>
    );
}

export default Products;
