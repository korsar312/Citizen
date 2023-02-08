import factory from "../../../../../../Helpers/Factory/Factory";
import { IStore } from "../../../../../../Helpers/Factory/Variables/FactoryStore";
import { LanguageInterface } from "../../../../Language.interface";

export class StoreLanguage {
	private readonly _store;

	constructor() {
		this._store = factory.create("LanguageStore").factoryMethod();
	}

	/**
	 * Возвращает стор
	 */
	public execute(): IStore<LanguageInterface.TLanguageObj> {
		const getStore = () => this._store.getStore();
		const setStore = (store: LanguageInterface.TLanguageObj) => this._store.setStore(store);

		return { getStore, setStore };
	}
}
