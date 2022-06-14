import React, { useState, createContext } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

interface ThemeContext {
	units: number;
	setUnits: () => void;
}

const App = () => {
	const [units, setUnits] = useState(1);
	const UnitsContext = createContext<Partial<ThemeContext>>({});

	return (
		<>
			<UnitsContext.Provider
				value={{ units: 1, setUnits: () => console.log(units) }}
			>
				<Header />

				<Main />

				<Footer />
			</UnitsContext.Provider>
		</>
	);
};

export default App;
