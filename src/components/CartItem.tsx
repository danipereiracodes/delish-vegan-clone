import { CartDetailsProps } from '../@types/unit-type';
import React from 'react';

type Items = {
	name: string;
	units: number;
	img: string;
	price: number;
};

const CartItem: React.FC<CartDetailsProps> = props => {
	if (props.cartItems.length > 0) {
		return props.cartItems.map((it: Items) => (
			<article className='cart_items'>
				<h4>
					{it.units} {it.name}
				</h4>
				<img className='cart_items--img' src={it.img} alt={it.name} />
				<h4>{it.price * it.units}.00€</h4>
			</article>
		));
	}
};

export default CartItem;
