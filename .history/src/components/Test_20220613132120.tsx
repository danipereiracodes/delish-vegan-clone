

import React ,{ useState} from 'react';

import '../sass/components/_buttons.scss';

export interface ProductProps {
	products: {
		id: number;
		name: string;
		price: number;
		desc: string;
		img: string;
		units: number;
		buttonText:string
	}[];
}

const initialState = [{id:1, text:'add to cart'},{id:2,text:'add to cart'},{id:3,text:'add to cart'}];

const Test:React.FC<ProductProps> = (props) => {

    const [text, setText] = useState(props.products)
    
    const handleClick = (index:number) => {
        console.log( JSON.parse(JSON.stringify(text)))
        const newText = 
        JSON.parse(JSON.stringify(text))
        newText[index ].buttonText = 'Adding to cart...';
        setText(newText)
        setTimeout(() => {setText(props.products) }, 2000)
       console.log(props.products);
       

    }

    


    return <div style={{display:'flex', width:'100%', height:'20rem', justifyContent:'center', alignItems:'center'}}>
        
        {props.products  && props.products.map((b, index) => <button className='product-card-button' key={index} onClick={() => handleClick(index)}>{b && b.buttonText}</button>)}
        </div>
}

export default Test;