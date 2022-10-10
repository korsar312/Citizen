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
		OVER = "OVER",
		FARUND_START = "FARUND_START",
		FARUND_OUTSKIRTS_DESCRIPTION = "FARUND_OUTSKIRTS_DESCRIPTION",
		FARUND_TEMPLE_DESCRIPTION_CITY = "FARUND_TEMPLE_DESCRIPTION_CITY",
		FARUND_ENTER_NORTHERN_WALL = "FARUND_ENTER_NORTHERN_WALL",
		FARUND_ENTER_EAST_WALL = "FARUND_ENTER_EAST_WALL",
		FARUND_ENTER_OUTSKIRTS = "FARUND_ENTER_OUTSKIRTS",
		FARUND_ENTER_TEMPLE = "FARUND_ENTER_TEMPLE",
		FARUND_ENTER_DOWNTOWN = "FARUND_ENTER_DOWNTOWN",
		FARUND_ENTER_SHOPPING_DISTRICT = "FARUND_ENTER_SHOPPING_DISTRICT",
		YOU_LIKE_COMMUNYTY = "YOU_LIKE_COMMUNYTY",
		OH_OKAY = "OH_OKAY",
		GO_WALK = "GO_WALK",
		CHOICES = "CHOICES",
		CHOICE_PLACE = "CHOICE_PLACE",
		FALED = "FALED",
		AND_PLACE = "AND_PLACE",
		AND_TIMES = "AND_TIMES",
		CHOICING_PLACE = "CHOICING_PLACE",
		CHOICING_TIMES = "CHOICING_TIMES",
		YEEEE = "YEEEE",
	}

	/**
	 * Реплики диалога
	 */
	export enum EWordDialog {
		FINAL = "FINAL",
		GO_MAIN_TEMPLE = "GO_MAIN_TEMPLE",
		GO_SHOPPING_DISTRICT = "GO_SHOPPING_DISTRICT",
		GO_OUTSKIRTS = "GO_OUTSKIRTS",
		GO_DOWNTOWN = "GO_DOWNTOWN",
		GO_EAST_WALL_CITY = "GO_EAST_WALL_CITY",
		GO_NORTHERN_WALL_CITY = "GO_NORTHERN_WALL_CITY",
		LOOK_AROUND = "LOOK_AROUND",
		YEAP = "YEAP",
		NOPE = "NOPE",
		SILIENCE = "SILIENCE",
		I_AGREE = "I_AGREE",
		GET_OUT = "GET_OUT",
		GO_CHOICE_PLACE = "GO_CHOICE_PLACE",
		GO_CHOICE_TIMES = "GO_CHOICE_TIMES",
		I_DONT_WALK = "I_DONT_WALK",
		KAFE = "KAFE",
		PARK = "PARK",
		PARK_ATTRACTIONS = "PARK_ATTRACTIONS",
		RESTORAN_OSTANKINO = "RESTORAN_OSTANKINO",
		YOUR_DREEM = "YOUR_DREEM",
		CATS = "CATS",
		GO_CURRENT_DAY = "GO_CURRENT_DAY",
		PN = "PN",
		VT = "VT",
		SR = "SR",
		CHT = "CHT",
		PT = "PT",
		SB = "SB",
		VS = "VS",
		NEXT = "NEXT",
		EMPTY = "EMPTY",
	}

	export const EWordLocations = {
		...EWordSpeaker,
		...EWordDialog,
	};
}
