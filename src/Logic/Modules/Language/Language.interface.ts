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
	 * Список слов дней недели
	 */
	export enum ELanguageDayOfTheWeekWord {
		ESD = "ESD",
		SHR = "SHR",
		MOS = "MOS",
		SHM = "SHM",
		FLD = "FLD",
	}

	/**
	 * Список всех слов
	 */
	export const allLanguageWord = {
		...ELanguageSimpleWord,
		...ELanguageDayOfTheWeekWord,
	};

	export type TAllLanguageWord = keyof typeof allLanguageWord;

	type TWord = {
		[key in ELanguageType]: string;
	};

	export type TLanguage = {
		[key in TAllLanguageWord]: TWord;
	};
}
