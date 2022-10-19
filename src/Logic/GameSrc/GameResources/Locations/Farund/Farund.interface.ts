import { LocationsInterface } from "../Locations.interface";

export namespace FarundInterface {
	/**
	 * Список диалогов данной локации
	 */
	export enum IFarundDialogName {
		START = "START",
		LIGHT_ON = "LIGHT_ON",
		GO_NEXT = "GO_NEXT",
		IN_KITCHEN = "IN_KITCHEN",
		DRINK = "DRINK",
		LISTEN = "LISTEN",
		IN_ROOM = "IN_ROOM",
		GO_AT_ONCE = "GO_AT_ONCE",
		GO_AND_SAY = "GO_AND_SAY",
		VANDERFUL = "VANDERFUL",
		SMILES = "SMILES",
		DAY_SELEBRITY = "DAY_SELEBRITY",
		FINAL = "FINAL",
	}

	/**
	 * Интерфейс для данной локации
	 */
	export type IFarundDialog = {
		[key in IFarundDialogName]: () => LocationsInterface.TDialog;
	};
}
