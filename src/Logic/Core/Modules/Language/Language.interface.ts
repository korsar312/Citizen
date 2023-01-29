import { TimesInterface } from "../../../../TEMP/Game/GameResources/Domains/Times/Times.interface";
import { LocationsInterface } from "../../../../TEMP/Game/GameResources/Locations/Locations.interface";
import { LanguageDomain } from "./Implementation/Domain/Language.domain";
import { LanguageService } from "./Implementation/Service/Language.service";

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

	/**
	 * Основной языковой объект
	 */
	export type TLanguageObj = {
		model: ELanguageType;
	};

	/**
	 * Домен и сервис
	 */
	export interface IModules {
		domain: LanguageDomain;
		service: LanguageService;
	}
}
