import { generatePath, NavigateFunction, Params } from "react-router-dom";
import { RouteInterfaces } from "../../../../Route.interfaces";

export class RouterGo {
	static execute() {
		/**
		 * Программный переход на страницы
		 * @params navigate - функция навигации
		 * @params path - имя роута
		 * @params params - параметры, что передаются в URL
		 * @params state - параметры, что не передаются в URL
		 */
		return function (navigate: NavigateFunction | null, path: RouteInterfaces.PathName, params?: Params, state?: Record<string, any>): void {
			navigate && navigate(generatePath(path, params), { replace: false, state });
		};
	}
}
