import '../sass/layout/_grid.scss';
import '../sass/components/_headings.scss';
import ProductList from './ProductList';
import React, { useState, useEffect } from 'react';
import ShoppingCart from './ShoppingCart';
import useLogicTest from '../hooks/useLogic';

const Main: React.FunctionComponent = () => {
	const [item, setItem] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [logic, setLogic] = useLogicTest();

	useEffect(() => {
		if (typeof setLogic === 'function' && typeof logic === 'number') {
			setInterval(() => {
				setLogic(logic + 1);
				console.log('LOGIC NOW', logic);
			}, 1000);
		}
	}, []);

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
		<section className='main-wrapper'>
			<h1 className='heading-primary'>Nuevos sabores cada mes!</h1>
			<h2 className='heading-secondary'>
				<span>PINCHA AQUÍ</span> PARA LEER MÁS INFORMACIÓN SOBRE ENVÍOS Y
				RECOGIDAS EN TIENDA.
			</h2>
			<ShoppingCart setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />
			<ProductList
				products={item}
				setIsCartOpen={setIsCartOpen}
				isCartOpen={isCartOpen}
			/>
		</section>
	);
};

export default Main;
