import { TimesInterface } from "../../GameSrc/Game/Domains/Times/Times.interface";

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
	}

	/**
	 * Список временных слов
	 */
	const ELanguageTimesWord = {
		...TimesInterface.EDayOfTheWeekWord,
		...TimesInterface.EWeekWord,
		...TimesInterface.EMonthWord,
	};

	/**
	 * Список диалоговых слов
	 */
	const ELanguageDialogWord = {};

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
