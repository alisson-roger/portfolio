import Product from '../product/Product';
import './productList.css';
import { products } from '../../data';

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
          Donec odio erat, tristique eu velit ac, feugiat faucibus nisl. Donec
          vitae maximus felis.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product img={item.img} key={item.id} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
