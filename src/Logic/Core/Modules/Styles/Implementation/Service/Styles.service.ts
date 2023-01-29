import { IStore } from "../../../../Factory/Variables/FactoryStore";
import factory from "../../../../Factory/Factory";
import { StylesInterface } from "../../Styles.interface";

export class StylesService {
	private readonly _store;

	constructor() {
		this._store = factory.create("StyleStore").factoryMethod();
	}

	/**
	 * Возвращает тему пользователя
	 */
	public getUserTheme(): StylesInterface.ETheme {
		const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		return isDark ? StylesInterface.ETheme.DARK : StylesInterface.ETheme.LIGHT;
	}

	/**
	 * Создает стилевой объект
	 */
	public createStyleObj(theme: StylesInterface.ETheme): StylesInterface.TStyleObj {
		return { theme: theme };
	}

	/**
	 * Возвращает стор
	 */
	public get store(): IStore<StylesInterface.TStyleObj> {
		const getStore = () => this._store.getStore();
		const setStore = (store: StylesInterface.TStyleObj) => this._store.setStore(store);

		return { getStore, setStore };
	}
}
