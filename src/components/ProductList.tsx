import '../sass/layout/_grid.scss';
import ProductCard from "./ProductCard";

export interface ProductProps {
	products: {
		id: number;
		name: string;
		price: number;
		desc: string;
		img: string;
		units: number;
		buttonText: string;
		added:boolean;
	}[];

	
}

interface CartProps {
	isCartOpen:boolean;
	setIsCartOpen:Function;
}

type AllProps = CartProps & ProductProps;


const ProductList: React.FC<AllProps> = (props) => {
	console.log(props)
   
	return (
		<article className='product-archive'>{ <ProductCard  products={props.products} setIsCartOpen={props.setIsCartOpen}isCartOpen={props.isCartOpen}/>}</article>
	);
};

export default ProductList;
