import { typesUtils } from "../../../Libs/Utils/TypesUtils";
import { FarundInterface } from "./Farund/Farund.interface";

export namespace LocationsInterface {
	/**
	 * Интерфейс для обязательный свойств модуля локаций
	 */
	export interface ILocationModule<dialog, store> {
		dialog: dialog;
		store: store;
	}

	/**
	 * Список локаций
	 */
	export enum ILocationList {
		FARUND = "FARUND",
	}

	/**
	 * Интерфейс для класса локаций
	 */
	export type ILocation = {
		[key in ILocationList]: any;
	};

	/**
	 * Полное описание текущего диалога
	 */
	export type TDialog = {
		image: string;
		speaker: EWordSpeaker;
		dialog: TDialogLine[];
	};

	/**
	 * Разовое изменение диалога
	 */
	export type TEditDialog = typesUtils.ChangeObject<TDialog>;

	/**
	 * Список локаций и их диалоги
	 */
	type TLoc = {
		[ILocationList.FARUND]: FarundInterface.IFarundDialogName;
	};

	/**
	 * Путь к следующему диалогу
	 */
	type TDialogPat<loc extends ILocationList> = {
		loc: loc;
		dialog: TLoc[loc];
		options?: TEditDialog;
	};

	export type TDialogPath = TDialogPat<ILocationList>;

	/**
	 * Реплика и последствие
	 */
	export type TDialogLine = {
		dialogLine: EWordDialog;
		callback?: () => void;
		path: TDialogPath;
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
