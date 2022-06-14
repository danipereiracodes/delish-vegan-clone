import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { UnitContext } from './context/unitsContext';

function App() {
	const [units, setUnits] = useState();
	return (
		<>
			<UnitContext.Provider
				value={{
					units: 0,
					setUnits: setUnits,
				}}
			>
				<Header />
				<Main />
				<Footer />
			</UnitContext.Provider>
		</>
	);
}

export default App;
