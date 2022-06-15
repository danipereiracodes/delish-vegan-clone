import { FaShoppingBag } from 'react-icons/fa';
import React, { useContext } from 'react';
import '../sass/components/_shopping-cart.scss';
import { UnitContext } from '../context/unitsContext';
import { CartDetailsProps } from '../@types/unit-type';
import CartItem from '../components/CartItem';

const ShoppingCart: React.FC<CartDetailsProps> = props => {
	const { units } = useContext(UnitContext);
	return (
		<div id={props.isCartOpen ? 'slide' : ''} className='shopping_cart'>
			<div
				onClick={() => props.setIsCartOpen(!props.isCartOpen)}
				className='shopping_cart_units--wrapper'
			>
				<div className='shopping_cart_units'>
					<p>{units}</p>
				</div>
				<div className='shopping_cart_shoppingbag--wrapper'>
					<FaShoppingBag className='basket_icon' />
				</div>
			</div>
			<aside className='shopping_cart_details'>
				<header>
					<h2>Your basket</h2>
				</header>

				<main className='cart-item'>
					<CartItem
						isCartOpen={props.isCartOpen}
						setIsCartOpen={props.setIsCartOpen}
						cartItems={props.cartItems}
					/>
				</main>

				<footer>
					<div className='button-wrapper'>
						<button
							onClick={() => props.setIsCartOpen(!props.isCartOpen)}
							className='general-button'
						>
							Close basket
						</button>
						<button
							onClick={() => props.setIsCartOpen(!props.isCartOpen)}
							className='general-button'
						>
							Delete items
						</button>
						<button className='general-button'>Check out</button>
					</div>
				</footer>
			</aside>
		</div>
	);
};

export default ShoppingCart;
