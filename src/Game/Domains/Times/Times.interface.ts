import { typesUtils } from "../../../Logic/Libs/Utils/TypesUtils";

export namespace TimesInterface {
	/**
	 * Полная дата
	 * минут в часах || часов в дне || вней в неделе || недель в месяце || месяцев в году
	 */
	export type TFullDate = {
		minute: typesUtils.NumberRange<0, 59>;
		hours: typesUtils.NumberRange<0, 23>;
		day: typesUtils.NumberRange<1, 6>;
		week: typesUtils.NumberRange<1, 7>;
		month: typesUtils.NumberRange<1, 11>;
		years: number;
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
	export type TListMonth = Record<TimesInterface.TFullDate["month"], TimesInterface.EMonthWord>;
}
