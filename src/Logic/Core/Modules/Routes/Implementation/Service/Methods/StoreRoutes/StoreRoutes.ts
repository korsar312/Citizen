import factory from "../../../../../../Factory/Factory";
import { IStore } from "../../../../../../Factory/Variables/FactoryStore";
import { RouteInterfaces } from "../../../../Route.interfaces";

export class StoreRoutes {
	private readonly _store;

	constructor() {
		this._store = factory.create("RouterStore").factoryMethod();
	}

	/**
	 * Возвращает стор
	 */
	public execute(): IStore<RouteInterfaces.TNavigateObj> {
		const getStore = () => this._store.getStore();
		const setStore = (store: RouteInterfaces.TNavigateObj) => this._store.setStore(store);

		return { getStore, setStore };
	}
}
