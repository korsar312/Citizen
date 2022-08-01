import { TimesInterface } from "../Domains/Times/Times.interface";

export namespace RepositoryInterface {
	export type TSave = {
		date: TimesInterface.TFullDate;
	};
}
