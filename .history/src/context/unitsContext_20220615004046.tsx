import React from 'react';

interface ContextType {
	units: 0;
	setUnits: Function;
}
export const UnitContext = React.createContext<ContextType>({
	units: 0,
	setUnits: (units: number) => units,
});
