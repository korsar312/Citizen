import { RouteInterfaces } from "../../../Route.interfaces";
import { NavigateFunction } from "react-router-dom";

export class SetNavigateFunc {
	static execute(module: RouteInterfaces.IModules) {
		return function (languageType: NavigateFunction): void {
			const storeNavigate = module.service.store.getStore();

			module.domain.setNavigate(storeNavigate, languageType);
		};
	}
}
