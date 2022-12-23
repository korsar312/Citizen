import { TimesInterface } from "../../GameSrc/GameResources/Domains/Times/Times.interface";
import { LocationsInterface } from "../../GameSrc/GameResources/Locations/Locations.interface";

export namespace LanguageInterface {
	/**
	 * Список языков
	 */
	export enum ELanguageType {
		RU = "RU",
		EN = "EN",
	}

	/**
	 * Список обычных слов
	 */
	export enum ELanguageSimpleWord {
		EXIT = "EXIT",
		TEMP_WORD_REMOVE_THIS = "TEMP_WORD_REMOVE_THIS",
	}

	/**
	 * Список временнЫх слов
	 */
	const ELanguageTimesWord = {
		...TimesInterface.EDayOfTheWeekWord,
		...TimesInterface.EWeekWord,
		...TimesInterface.EMonthWord,
	};

	/**
	 * Список диалоговых слов
	 */
	const ELanguageDialogWord = {
		...LocationsInterface.EWordLocations,
	};

	/**
	 * Список всех слов
	 */
	export const allLanguageWord = {
		...ELanguageSimpleWord,
		...ELanguageTimesWord,
		...ELanguageDialogWord,
	};

	export type TAllLanguageWord = keyof typeof allLanguageWord;

	/**
	 * Список языков для словаря
	 */
	type TWord = {
		[key in ELanguageType]: string;
	};

	/**
	 * Список слов для словаря
	 */
	export type TLanguage = {
		[key in TAllLanguageWord]: TWord;
	};
}
