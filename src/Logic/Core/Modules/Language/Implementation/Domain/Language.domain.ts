import { LanguageInterface } from "../../Language.interface";

export class LanguageDomain {
	/**
	 * Устанавливает языковую модель
	 * @param languageObj - языковой объект
	 * @param languageType - устанавливаемый язык
	 */
	public setCurrentLanguage(
		languageObj: LanguageInterface.TLanguageObj,
		languageType: LanguageInterface.ELanguageType,
	): LanguageInterface.TLanguageObj {
		return { ...languageObj, model: languageType };
	}

	/**
	 * Возвращает текущую языковую модель
	 * @param languageObj - языковой объект
	 */
	public getCurrentLanguage(languageObj: LanguageInterface.TLanguageObj): LanguageInterface.ELanguageType {
		return languageObj.model;
	}

	/**
	 * Проверка на возможную языковую модель
	 * @param languageUser - язык пользователя
	 * @param languageArr - доступные языки
	 */
	public checkUserLanguage(languageUser: string, languageArr: LanguageInterface.ELanguageType[]): LanguageInterface.ELanguageType {
		const findModel = languageArr.find((l) => l === languageUser);

		return findModel || LanguageInterface.ELanguageType.EN;
	}

	/**
	 * Возвращает выбранное предложения для языковой модели
	 * @param languageDictionary - словарь
	 * @param wordKey - выбранное предложение
	 * @param langModel - текущий язык
	 */
	public getText(
		languageDictionary: LanguageInterface.TLanguage,
		wordKey: LanguageInterface.TAllLanguageWord,
		langModel: LanguageInterface.ELanguageType,
	): string {
		return languageDictionary[wordKey][langModel];
	}
}
