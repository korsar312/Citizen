import { RouteInterfaces } from "../Route.interfaces";
import { NavigateFunction, Params } from "react-router-dom";
import RoutesModule from "../Implementation/Routes.module";

export class RoutesUseCase {
	private module;

	constructor() {
		this.module = RoutesModule().invoker();
		this.initStore();
	}

	private initStore(): void {
		const styleObj = this.module.service.createNavigateObj();

		this.module.service.store.setStore(styleObj);
	}

	public RouterGo(path: RouteInterfaces.PathName, params?: Params, state?: Record<string, any>): void {
		const storeNavigate = this.module.service.store.getStore();
		const NavigateFunc = this.module.domain.getNavigate(storeNavigate);

		this.module.domain.RouterGo(NavigateFunc, path, params, state);
	}

	setNavigateFunc(languageType: NavigateFunction): void {
		const storeNavigate = this.module.service.store.getStore();

		this.module.domain.setNavigate(storeNavigate, languageType);
	}

	getNavigateFunc(): NavigateFunction | null {
		const storeNavigate = this.module.service.store.getStore();

		return this.module.domain.getNavigate(storeNavigate);
	}

	getRoutesPath(): RouteInterfaces.IRoute[] {
		return this.module.service.getRoutesPath();
	}
}
