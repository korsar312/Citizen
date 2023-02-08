import factory from "../../../../../../Helpers/Factory/Factory";
import { IStore } from "../../../../../../Helpers/Factory/Variables/FactoryStore";
import { StylesInterface } from "../../../../Styles.interface";

export class StoreStyles {
	private readonly _store;

	constructor() {
		this._store = factory.create("StyleStore").factoryMethod();
	}

	/**
	 * Возвращает стор
	 */
	public execute(): IStore<StylesInterface.TStyleObj> {
		const getStore = () => this._store.getStore();
		const setStore = (store: StylesInterface.TStyleObj) => this._store.setStore(store);

		return { getStore, setStore };
	}
}
