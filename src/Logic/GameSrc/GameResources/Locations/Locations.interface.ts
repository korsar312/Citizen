import { typesUtils } from "../../../Libs/Utils/TypesUtils";

export namespace LocationsInterface {
	/**
	 * Интерфейс для обязательный свойств модуля локаций
	 */
	export interface ILocationModule<dialog, store> {
		dialog: dialog;
		store: store;
	}

	/**
	 * Интерфейс для обязательный свойств локаций
	 */
	export interface ILocation {
		start: () => TDialog;
	}

	/**
	 * Полное описание текущего диалога
	 */
	export type TDialog = {
		image: string;
		speaker: EWordSpeaker;
		dialog: TDialogLine[];
	};

	/**
	 * Разовое зменение диалога
	 */
	export type TEditDialog = typesUtils.ChangeObject<TDialog>;

	/**
	 * Реплика и последствие
	 */
	export type TDialogLine = {
		dialogLine: EWordDialog;
		callback: () => TDialog;
	};

	/**
	 * Реплики норатора
	 */
	export enum EWordSpeaker {
		FARUND_START = "FARUND_START",
		FARUND_OUTSKIRTS_DESCRIPTION = "FARUND_OUTSKIRTS_DESCRIPTION",
		FARUND_TEMPLE_DESCRIPTION_CITY = "FARUND_TEMPLE_DESCRIPTION_CITY",
		FARUND_ENTER_NORTHERN_WALL = "FARUND_ENTER_NORTHERN_WALL",
		FARUND_ENTER_EAST_WALL = "FARUND_ENTER_EAST_WALL",
		FARUND_ENTER_OUTSKIRTS = "FARUND_ENTER_OUTSKIRTS",
		FARUND_ENTER_TEMPLE = "FARUND_ENTER_TEMPLE",
		FARUND_ENTER_DOWNTOWN = "FARUND_ENTER_DOWNTOWN",
		FARUND_ENTER_SHOPPING_DISTRICT = "FARUND_ENTER_SHOPPING_DISTRICT",
	}

	/**
	 * Реплики диалога
	 */
	export enum EWordDialog {
		GO_MAIN_TEMPLE = "GO_MAIN_TEMPLE",
		GO_SHOPPING_DISTRICT = "GO_SHOPPING_DISTRICT",
		GO_OUTSKIRTS = "GO_OUTSKIRTS",
		GO_DOWNTOWN = "GO_DOWNTOWN",
		GO_EAST_WALL_CITY = "GO_EAST_WALL_CITY",
		GO_NORTHERN_WALL_CITY = "GO_NORTHERN_WALL_CITY",
		LOOK_AROUND = "LOOK_AROUND",
	}

	export const EWordLocations = {
		...EWordSpeaker,
		...EWordDialog,
	};
}
