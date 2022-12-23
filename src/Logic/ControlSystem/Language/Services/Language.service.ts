import { dictionary } from "../Language.dictionary";
import { LanguageInterface } from "../Language.interface";
import SystemController from "../../SystemController";

export class LanguageService {
	private readonly language: LanguageInterface.TLanguage = dictionary;

	/**
	 * Возвращает выбранное предложения для языковой модели
	 * @param wordKey - выбранное предложение
	 */
	public getText(wordKey: LanguageInterface.TAllLanguageWord) {
		const language = SystemController("language", "store", "getCurrentLanguage");
		return this.language[wordKey][language];
	}
}
