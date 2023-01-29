import { RouteInterfaces } from "../../Route.interfaces";
import { generatePath, NavigateFunction, Params } from "react-router-dom";

export class RoutesDomain {
	/**
	 * Программный переход на страницы
	 * @params navigate - функция навигации
	 * @params path - имя роута
	 * @params params - параметры, что передаются в URL
	 * @params state - параметры, что не передаются в URL
	 */
	public RouterGo(navigate: NavigateFunction | null, path: RouteInterfaces.PathName, params?: Params, state?: Record<string, any>): void {
		navigate && navigate(generatePath(path, params), { replace: false, state });
	}

	/**
	 * Устанавливает функцию навигации
	 * @param navigateObj - навигационный объект
	 * @param navigate - устанавлимая функция
	 */
	public setNavigate(navigateObj: RouteInterfaces.TNavigateObj, navigate: NavigateFunction): RouteInterfaces.TNavigateObj {
		return { ...navigateObj, navigateFunc: navigate };
	}

	/**
	 * Возвращает функцию навигации
	 * @param navigateObj - навигационный объект
	 */
	public getNavigate(navigateObj: RouteInterfaces.TNavigateObj): NavigateFunction | null {
		return navigateObj.navigateFunc;
	}
}
