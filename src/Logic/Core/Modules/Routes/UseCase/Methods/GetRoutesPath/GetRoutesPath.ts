import { RouteInterfaces } from "../../../Route.interfaces";

export class GetRoutesPath {
	static execute(module: RouteInterfaces.IModules) {
		return function (): RouteInterfaces.IRoute[] {
			return module.service.getRoutesPath();
		};
	}
}
