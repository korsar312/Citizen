import { routes } from "./Routes.config";
import { RouteInterfaces } from "../../Route.interfaces";
import { IStore } from "../../../../Factory/Variables/FactoryStore";
import factory from "../../../../Factory/Factory";

export class RoutesService {
	private readonly _store;

	constructor() {
		this._store = factory.create("RouterStore").factoryMethod();
	}

	/**
	 * Возвращает путевой объект
	 */
	public getRoutesPath(): RouteInterfaces.IRoute[] {
		return routes;
	}

	/**
	 * Создает навигационный объект
	 */
	public createNavigateObj(): RouteInterfaces.TNavigateObj {
		return { navigateFunc: null };
	}

	/**
	 * Возвращает стор
	 */
	public get store(): IStore<RouteInterfaces.TNavigateObj> {
		const getStore = () => this._store.getStore();
		const setStore = (store: RouteInterfaces.TNavigateObj) => this._store.setStore(store);

		return { getStore, setStore };
	}
}
