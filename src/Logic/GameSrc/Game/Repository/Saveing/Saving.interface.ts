import { TimesInterface } from "../../Domains/Times/Times.interface";

export namespace SavingInterface {
	/**
	 * Параметры для сохранения
	 */
	export type TSave = {
		date: TimesInterface.TFullDate;
	};
}
