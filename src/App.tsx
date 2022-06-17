import React, { useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { UnitContext } from './context/unitsContext';

function App() {
	const [units, setUnits] = useState<number>(0);
	return (
		<>
			<UnitContext.Provider
				value={{
					units: units,
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
