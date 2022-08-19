import { LanguageInterface } from "../../../../Modules/Language/Language.interface";

export namespace LocationsInterface {
	/**
	 * Интерфейс для обязательный свойств локаций
	 */
	export interface ILocation {
		start: () => TDialog;
	}

	/**
	 * Реплика и последствие
	 */
	export type TDialogLine = {
		dialogLine: LanguageInterface.TAllLanguageWord;
		callback: () => "";
	};

	/**
	 * Полное описание текущего диалога
	 */
	export type TDialog = {
		id: "";
		image: "";
		dialog: TDialogLine[];
	};
}
