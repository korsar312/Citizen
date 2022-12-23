import { dictionary } from "./Language.dictionary";
import { LanguageInterface } from "./Language.interface";
import { LanguageStore } from "./Language.store";

export class LanguageService {
	private readonly language: LanguageInterface.TLanguage = dictionary;
	private store: LanguageStore;

	constructor(store: LanguageStore) {
		this.store = store;
	}

	/**
	 * Возвращает выбранное предложения для языковой модели
	 * @param wordKey - выбранное предложение
	 */
	public getText(wordKey: LanguageInterface.TAllLanguageWord) {
		return this.language[wordKey][this.store.getCurrentLanguage()];
	}
}
