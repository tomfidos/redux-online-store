
import './Products.css';
import productConfig from '../productConfig.json';
import './Product';
import Product from './Product';

const PRODUCTS = productConfig['products'];


const Products = (): JSX.Element => {
    
    return (
        <ul className="gallery">
            {PRODUCTS.map(product => {
                const id = product.product_id;
                return (
                    <Product key={id} id={id} image_path={product.img} name={product.name} />
                );
            })}
        </ul>
    );
}

export default Products;
