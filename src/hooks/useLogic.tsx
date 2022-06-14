import { useState } from 'react';

const useLogicTest = () => {
	const [logic, setLogic] = useState<number>(0);
	return [logic, setLogic];
};

export default useLogicTest;
