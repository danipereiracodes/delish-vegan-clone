import React, { useState } from 'react';
import '../sass/layout/_grid.scss';
import '../sass/components/_product-card.scss';
import '../sass/components/_buttons.scss';
import { ProductProps, CartProps } from '../@types/unit-type';

type AllProps = CartProps & ProductProps;

const ProductCard: React.FC<AllProps> = props => {
	const [isLoading, setIsLoading] = useState(false);

	const handleClick = (index: number) => {
		props.products[index].added = true;

		setTimeout(() => {
			props.setUnits((units: number) => units + 1);
			props.products[index].added = false;
			props.setIsCartOpen(() => {
				props.setIsCartOpen(() => true);
			});
		}, 1000);

		setIsLoading(prevState => !prevState);
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
								<div
									onClick={() => {
										handleClick(index);
									}}
									className='product-card-button--ADD'
								>
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
										props.handleAddToCart(it);
										handleClick(index);
									}}
									key={it.id}
								>
									{it.buttonText}
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
