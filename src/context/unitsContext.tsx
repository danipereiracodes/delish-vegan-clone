import React from 'react';

interface ContextType {
	units: number;
	setUnits: Function;
}
export const UnitContext = React.createContext<ContextType>({
	units: 0,
	setUnits: (units: number) => units,
});
