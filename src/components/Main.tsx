import '../sass/layout/_grid.scss';
import '../sass/components/_headings.scss';
import ProductList from './ProductList';
import React, { useState, useEffect, useContext } from 'react';
import ShoppingCart from './ShoppingCart';
import { UnitContext } from '../context/unitsContext';
import { Products } from '../@types/unit-type';

function SvgComponent(props: any) {
	return (
		<svg
			style={{
				flex: 1,
			}}
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path stroke='red' fill='#00f' d='M10 10H110V110H10z' />
		</svg>
	);
}

const Main: React.FunctionComponent = () => {
	const { units, setUnits } = useContext(UnitContext);
	const [item, setItem] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([] as Products[]);

	const handleAddToCart = (addedItem: any) => {
		setCartItems(prev => {
			//is item already in the cart?
			if (prev) {
				const isItem = prev.find(item => item.id === addedItem.id);

				if (isItem) {
					return prev.map(item =>
						item.id === addedItem.id ? { ...item, units: item.units + 1 } : item
					);
				}
			}

			return [...prev, { ...addedItem, amount: 1 }];
		});
		console.log(cartItems);
	};

	const fetchProducts = async () => {
		try {
			const response = await fetch('http://localhost:3500/products');

			const data = await response.json();
			setItem(data);
		} catch (err) {
			throw new Error('An error ocurred');
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<section id='menu' className='main-wrapper'>
			<h1 className='heading-primary'>Nuevos sabores cada mes!</h1>
			<h2 className='heading-secondary'>
				<span>PINCHA AQUÍ</span> PARA LEER MÁS INFORMACIÓN SOBRE ENVÍOS Y
				RECOGIDAS EN TIENDA.
			</h2>
			<ShoppingCart
				cartItems={cartItems}
				setIsCartOpen={setIsCartOpen}
				isCartOpen={isCartOpen}
			/>
			<ProductList
				products={item}
				setIsCartOpen={setIsCartOpen}
				isCartOpen={isCartOpen}
				handleAddToCart={handleAddToCart}
				units={units}
				setUnits={setUnits}
				cartItems={cartItems}
			/>
			<SvgComponent />
		</section>
	);
};

export default Main;
