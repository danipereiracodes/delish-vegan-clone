import React, { useState, createContext } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
	const [units, setUnits] = useState(1);
	const UnitsContext = createContext<number | Function>(0);

	return (
		<>
			<UnitsContext.Provider value={units}>
				<Header />

				<Main />

				<Footer />
			</UnitsContext.Provider>
		</>
	);
};

export default App;
