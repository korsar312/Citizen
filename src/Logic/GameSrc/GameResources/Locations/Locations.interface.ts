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
		disable?: boolean;
	};

	/**
	 * Реплики норатора
	 */
	export enum EWordSpeaker {
		START_S = "START_S",
		LIGHT_ERROR = "LIGHT_ERROR",
		KORIDOR = "KORIDOR",
		KITCHEN = "KITCHEN",
		DRINK_S = "DRINK_S",
		LISTENER = "LISTENER",
		ROOM = "ROOM",
		SURPRIS = "SURPRIS",
		GO_AND_SAY_S = "GO_AND_SAY_S",
		VANDERFUL = "VANDERFUL",
		SMILES = "SMILES",
		POZDRAVLENIA = "POZDRAVLENIA",
		FINAL_S = "FINAL_S",
	}

	/**
	 * Реплики диалога
	 */
	export enum EWordDialog {
		GO_NEXT = "GO_NEXT",
		LIGHT_ON = "LIGHT_ON",
		GO_KITCHEN = "GO_KITCHEN",
		GO_ROOM = "GO_ROOM",
		DRINK = "DRINK",
		LISTEN = "LISTEN",
		BACK = "BACK",
		GO_AND_SAY = "GO_AND_SAY",
		GO_AT_ONCE = "GO_AT_ONCE",
		GO_SILIENCE = "GO_SILIENCE",
		SURPRISED = "SURPRISED",
		SMILE = "SMILE",
		GO_DAY_SELEBRITY = "GO_DAY_SELEBRITY",
		FINAL = "FINAL",
		THE_END = "THE_END",
	}

	export const EWordLocations = {
		...EWordSpeaker,
		...EWordDialog,
	};
}
