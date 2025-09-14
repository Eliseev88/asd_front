import { useState } from "react";
import { TariffContext } from "./TariffContext";
import { TARIFF_OBJ } from "../data/tarrifs";

export const TariffProvider = ({children}) => {
	const [tariffObject, setTariffObject] = useState(TARIFF_OBJ);

	const changeTariffCollapse = (obj) => {
		setTariffObject(obj);
	}

	return (
		<TariffContext.Provider value={{ tariffObject, changeTariffCollapse }}>
			{children}
		</TariffContext.Provider>
	)	
}