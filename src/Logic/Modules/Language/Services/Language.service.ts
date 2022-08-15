import { dictionary } from "../Language.dictionary";
import { LanguageInterface } from "../Language.interface";
import modules from "../../Modules";

export class LanguageService {
	private readonly language: LanguageInterface.TLanguage = dictionary;

	/**
	 * Возвращает выбранное предложения для языковой модели
	 * @param wordKey - выбранное предложение
	 */
	public getText(wordKey: LanguageInterface.TAllLanguageWord) {
		return this.language[wordKey][modules.language.store.getCurrentLanguage()];
	}
}
