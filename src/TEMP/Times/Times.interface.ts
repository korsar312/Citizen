import { typesUtils } from "../../Logic/Libs/Utils/TypesUtils";
import { TimesDomain } from "./Implementation/Domain/Times.domain";
import { TimesService } from "./Implementation/Service/Times.service";

export namespace TimesInterface {
	/**
	 * Основной стилевой объект
	 */
	export type TTimeObj = {
		currentTimes: TFullDate;
		dateListsName: null;
	};

	/**
	 * Полная дата
	 * минут в часах || часов в дне || вней в неделе || недель в месяце || месяцев в году
	 */
	export type TFullDate = {
		minute: typesUtils.NumberRange<0, 61>;
		hour: typesUtils.NumberRange<0, 25>;
		day: typesUtils.NumberRange<1, 6>;
		week: typesUtils.NumberRange<1, 7>;
		month: typesUtils.NumberRange<1, 11>;
		year: number;
	};

	/**
	 * Список дней недели
	 */
	export enum EDayOfTheWeekWord {
		ESD = "ESD",
		SHR = "SHR",
		MOS = "MOS",
		SHM = "SHM",
		FLD = "FLD",
	}

	/**
	 * Список недель
	 */
	export enum EWeekWord {
		ESD = "ESD",
		SHR = "SHR",
		MOS = "MOS",
		SHM = "SHM",
		FLD = "FLD",
	}

	/**
	 * Список месяцев
	 */
	export enum EMonthWord {
		ESD = "ESD",
		SHR = "SHR",
		MOS = "MOS",
		SHM = "SHM",
		FLD = "FLD",
		GFH = "GFH",
		TYU = "TYU",
		GHJ = "GHJ",
		LFG = "LFG",
		TES = "TES",
	}

	export type TListDays = Record<TimesInterface.TFullDate["day"], TimesInterface.EDayOfTheWeekWord>;
	export type TListWeeks = Record<TimesInterface.TFullDate["week"], TimesInterface.EWeekWord>;
	export type TListMonth = Record<TimesInterface.TFullDate["month"], TimesInterface.EMonthWord>;

	/**
	 * Домен и сервис
	 */
	export interface IModules {
		domain: TimesDomain;
		service: TimesService;
	}
}
