import { useState } from "react";
import { CollapseContext } from "./CollapseContext";


export const CollapseProvider = ({children}) => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const toggleCollapse = (value) => {
		setIsCollapsed(value);
	}

	return (
		<CollapseContext.Provider value={{ isCollapsed, toggleCollapse }}>
			{children}
		</CollapseContext.Provider>
	)	
}