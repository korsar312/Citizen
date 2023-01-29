import { dictionary } from "./Language.dictionary";
import { LanguageInterface } from "../../Language.interface";
import factory from "../../../../Factory/Factory";
import { IStore } from "../../../../Factory/Variables/FactoryStore";

export class LanguageService {
	private readonly _store;

	constructor() {
		this._store = factory.create("LanguageStore").factoryMethod();
	}

	/**
	 * Возвращает словарь
	 */
	public getDictionary(): LanguageInterface.TLanguage {
		return dictionary;
	}

	/**
	 * Создает языковой объект
	 * @param languageType - языковой объект
	 */
	public createLanguageObj(languageType: LanguageInterface.ELanguageType): LanguageInterface.TLanguageObj {
		return { model: languageType };
	}

	/**
	 * Возвращает языковую модель пользователя
	 */
	public getUserLanguage(): string {
		const language = window.navigator
			? window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage
			: LanguageInterface.ELanguageType.RU;
		return language.slice(0, 2).toUpperCase();
	}

	/**
	 * Перевод языков в массив
	 */
	public transformLangToArr(): Array<LanguageInterface.ELanguageType> {
		return Object.keys(LanguageInterface.ELanguageType) as Array<LanguageInterface.ELanguageType>;
	}

	/**
	 * Возвращает стор
	 */
	public get store(): IStore<LanguageInterface.TLanguageObj> {
		const getStore = () => this._store.getStore();
		const setStore = (store: LanguageInterface.TLanguageObj) => this._store.setStore(store);

		return { getStore, setStore };
	}
}
