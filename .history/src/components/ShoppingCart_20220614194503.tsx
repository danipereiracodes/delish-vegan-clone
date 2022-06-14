import { FaShoppingBag } from 'react-icons/fa';
import React from 'react';
import '../sass/components/_shopping-cart.scss';

interface CardDetailsProps {
	isCartOpen: boolean;
	setIsCartOpen: Function;
}

const ShoppingCart: React.FC<CardDetailsProps> = props => {
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

			<div className='shopping_cart_details'>
				<h4>Your Cart</h4>
			</div>
		</div>
	);
};

export default ShoppingCart;
