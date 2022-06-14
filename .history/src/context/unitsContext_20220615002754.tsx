import React from 'react';

interface ContextType {
	units: 0;
	setUnits: Function;
}
export const AppContext = React.createContext<Partial<ContextType>>({});
