import { makeAutoObservable } from "mobx";
import { ICreator } from "../Factory";

export interface IStore<TStore> {
	setStore(store: TStore): void;

	getStore(): TStore;
}

class StoreProduct<TStore> implements IStore<TStore> {
	private store: TStore | undefined;

	constructor(props?: TStore) {
		this.store = props;
		makeAutoObservable(this);
	}

	/**
	 * Устанавливает стор
	 * @param store - стор
	 */
	public setStore(store: TStore): void {
		this.store = store;
	}

	/**
	 * Возвращает стор
	 */
	public getStore(): TStore {
		if (this.store === undefined) {
			throw new Error("Данный стор не определен");
		}
		return this.store;
	}
}

class StoreCreator<INIT> implements ICreator<StoreProduct<INIT>, INIT> {
	public factoryMethod(props?: INIT): StoreProduct<INIT> {
		return new StoreProduct(props);
	}
}

export default StoreCreator;
