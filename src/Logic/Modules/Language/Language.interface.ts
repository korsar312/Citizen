import { TimesInterface } from "../../../Game/Domains/Times/Times.interface";

export namespace LanguageInterface {
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
	 * Список всех слов
	 */
	export const allLanguageWord = {
		...ELanguageSimpleWord,
		...TimesInterface.EDayOfTheWeekWord,
		...TimesInterface.EWeekWord,
		...TimesInterface.EMonthWord,
	};

	export type TAllLanguageWord = keyof typeof allLanguageWord;

	type TWord = {
		[key in ELanguageType]: string;
	};

	export type TLanguage = {
		[key in TAllLanguageWord]: TWord;
	};
}
