import { LanguageInterface } from "../../../../Language.interface";

export class TransformLangToArr {
	static execute() {
		/**
		 * Перевод языков в массив
		 */
		return function (): Array<LanguageInterface.ELanguageType> {
			return Object.keys(LanguageInterface.ELanguageType) as Array<LanguageInterface.ELanguageType>;
		};
	}
}
