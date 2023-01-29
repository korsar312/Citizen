import { RouteInterfaces } from "../../../../Route.interfaces";
import { routes } from "./Routes.config";

export class GetRoutesPath {
	static execute() {
		/**
		 * Возвращает навигационный объект
		 */
		return function (): RouteInterfaces.IRoute[] {
			return routes;
		};
	}
}
