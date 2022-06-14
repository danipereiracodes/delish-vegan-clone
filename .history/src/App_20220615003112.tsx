import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { AppContext } from './context/unitsContext';

function App() {
	const [units, setUnits] = useState();
	return (
		<>
			<AppContext.Provider
				value={{
					units: units,
					setUnits: setUnits,
				}}
			>
				<Header />
				<Main />
				<Footer />
			</AppContext.Provider>
		</>
	);
}

export default App;
