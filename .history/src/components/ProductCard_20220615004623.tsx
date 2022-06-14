import React, { useState, useContext, useEffect } from 'react';
import '../sass/layout/_grid.scss';
import '../sass/components/_product-card.scss';
import '../sass/components/_buttons.scss';
import { UnitContext } from '../context/unitsContext';

import { AiOutlineCheck } from 'react-icons/ai';

export interface ProductProps {
	products: {
		id: number;
		name: string;
		price: number;
		desc: string;
		img: string;
		units: number;
		buttonText: string;
		added: boolean;
	}[];
}

interface CartProps {
	isCartOpen: boolean;
	setIsCartOpen: Function;
}

type AllProps = CartProps & ProductProps;

const ProductCard: React.FC<AllProps> = props => {
	const [isLoading, setIsLoading] = useState(false);
	const { units, setUnits } = useContext(UnitContext);

	const handleClick = (index: number) => {
		props.products[index].added = true;
		setUnits(() => units + 1);

		setTimeout(() => {
			props.products[index].added = false;
			props.setIsCartOpen(() => {
				props.setIsCartOpen(() => !props.isCartOpen);
			});
		}, 2000);
		setIsLoading(prevState => !prevState);

		setTimeout(() => {
			setIsLoading(prevState => !prevState);
		}, 2000);

		setTimeout(() => {
			props.setIsCartOpen(() => false);
		}, 7000);
	};

	return (
		<>
			{props.products.length > 0 &&
				props.products.map((it, index) => (
					<article key={it.id} className='product-card'>
						<img src={it.img} alt={it.name} />
						<h3>{it.name}</h3>
						<p>{it.desc}</p>
						<h4>{it.price}.00€</h4>
						<div className='product-card__button--wrapper'>
							{it.added ? (
								<div className='product-card-button--ADD'>
									adding
									<div className='lds-ring'>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
									</div>
								</div>
							) : (
								<button
									className='product-card-button--ADD'
									onClick={() => {
										handleClick(index);
									}}
									key={it.id}
								>
									{it.buttonText}
									<AiOutlineCheck />
								</button>
							)}
							<button className='product-card-button--INFO'>info</button>
						</div>
					</article>
				))}
		</>
	);
};

export default ProductCard;
