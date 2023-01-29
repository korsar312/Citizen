import { LanguageInterface } from "../../../../Language.interface";

export class SetCurrentLanguage {
	static execute() {
		/**
		 * Устанавливает языковую модель
		 * @param languageObj - языковой объект
		 * @param languageType - устанавливаемый язык
		 */
		return function (languageObj: LanguageInterface.TLanguageObj, languageType: LanguageInterface.ELanguageType): LanguageInterface.TLanguageObj {
			return { ...languageObj, model: languageType };
		};
	}
}
