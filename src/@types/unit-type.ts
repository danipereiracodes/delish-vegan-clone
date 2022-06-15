export type UnitContextType = {
	units: number;
	setUnits: () => void;
};

export type Products = {
	id: number;
	name: string;
	price: number;
	desc: string;
	img: string;
	units: number;
	buttonText: string;
	added: boolean;
};

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

export interface CartProps {
	isCartOpen: boolean;
	setIsCartOpen: Function;
	handleAddToCart: Function;
	units: number;
	setUnits: Function;
	cartItems: any;
}

export interface CartDetailsProps {
	isCartOpen: boolean;
	setIsCartOpen: Function;
	cartItems: any;
}
