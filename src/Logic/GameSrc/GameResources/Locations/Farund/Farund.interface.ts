import { LocationsInterface } from "../Locations.interface";

export namespace FarundInterface {
	/**
	 * Список диалогов данной локации
	 */
	export enum IFarundDialogName {
		START = "START",
		GO_WALK = "GO_WALK",
		CHOICE_PLACE = "CHOICE_PLACE",
		CHOICE_TIMES = "CHOICE_TIMES",
		GAME_OVER = "GAME_OVER",
		CHOICES = "CHOICES",
		GAME_PASSED = "GAME_PASSED",
	}

	/**
	 * Интерфейс для данной локации
	 */
	export type IFarundDialog = {
		[key in IFarundDialogName]: () => LocationsInterface.TDialog;
	};
}
