import productJson from '../productConfig.json';
import Product from './Product';


const Products = (): JSX.Element => {
    
    return (
        <ul>
            {productJson.products.map(product => {
                return (
                    <li>Single Product</li>
                );
            })}
        </ul>
    );
}

export default Products;
