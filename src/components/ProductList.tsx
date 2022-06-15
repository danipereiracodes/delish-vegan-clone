import '../sass/layout/_grid.scss';
import ProductCard from './ProductCard';
import { ProductProps, CartProps } from '../@types/unit-type';

type AllProps = CartProps & ProductProps;

const ProductList: React.FC<AllProps> = props => {
	return (
		<article className='product-archive'>
			{
				<ProductCard
					products={props.products}
					setIsCartOpen={props.setIsCartOpen}
					isCartOpen={props.isCartOpen}
					handleAddToCart={props.handleAddToCart}
					units={props.units}
					setUnits={props.setUnits}
					cartItems={props.cartItems}
				/>
			}
		</article>
	);
};

export default ProductList;
