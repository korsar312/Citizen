import { ICreator } from "../Factory";

type TModule<D, M> = {
	domain: D;
	service: M;
};

interface IStore<TDomain, TService> {
	invoker: () => TModule<TDomain, TService>;
}

class ModulesProduct<TDomain, TService> implements IStore<TDomain, TService> {
	private readonly modules: TModule<TDomain, TService>;

	constructor(props: TModule<TDomain, TService>) {
		this.modules = props;
	}

	/**
	 * Возвращает инициализированные модули
	 */
	public invoker(): TModule<TDomain, TService> {
		return this.modules;
	}
}

class ModulesCreator<TDomain, TService> implements ICreator<ModulesProduct<TDomain, TService>, TModule<TDomain, TService>> {
	public factoryMethod(props: TModule<TDomain, TService>): ModulesProduct<TDomain, TService> {
		return new ModulesProduct(props);
	}
}

export default ModulesCreator;
