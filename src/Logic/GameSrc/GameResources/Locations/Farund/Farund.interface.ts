import { LocationsInterface } from "../Locations.interface";

export namespace FarundInterface {
	/**
	 * Список диалогов данной локации
	 */
	export enum IFarundDialogName {
		START = "START",
		OUTSKIRTS = "OUTSKIRTS",
		TEMPLE = "TEMPLE",
		DOWNTOWN = "DOWNTOWN",
		SHOPPING_DISTRICT = "SHOPPING_DISTRICT",
		EASTWALL = "EASTWALL",
		NORTHERNWALL = "NORTHERNWALL",
	}

	/**
	 * Интерфейс для данной локации
	 */
	export type IFarundDialog = {
		[key in IFarundDialogName]: () => LocationsInterface.TDialog;
	};
}
