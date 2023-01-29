import { RouteInterfaces } from "../../../Route.interfaces";
import { Params } from "react-router-dom";

export class RouterGo {
	static execute(module: RouteInterfaces.IModules) {
		return function (path: RouteInterfaces.PathName, params?: Params, state?: Record<string, any>): void {
			const storeNavigate = module.service.store.getStore();
			const NavigateFunc = module.domain.getNavigate(storeNavigate);

			module.domain.routerGo(NavigateFunc, path, params, state);
		};
	}
}
