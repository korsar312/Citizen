import { LanguageInterface } from "../../../../Language.interface";

export class GetText {
	static execute() {
		/**
		 * Возвращает выбранное предложения для языковой модели
		 * @param languageDictionary - словарь
		 * @param wordKey - выбранное предложение
		 * @param langModel - текущий язык
		 */
		return function (
			languageDictionary: LanguageInterface.TLanguage,
			wordKey: LanguageInterface.TAllLanguageWord,
			langModel: LanguageInterface.ELanguageType,
		): string {
			return languageDictionary[wordKey][langModel];
		};
	}
}
