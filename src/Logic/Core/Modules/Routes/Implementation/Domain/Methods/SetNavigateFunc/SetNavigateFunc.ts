import { RouteInterfaces } from "../../../../Route.interfaces";
import { NavigateFunction } from "react-router-dom";

export class SetNavigateFunc {
	static execute() {
		/**
		 * Устанавливает функцию навигации
		 * @param navigateObj - навигационный объект
		 * @param navigate - устанавлимая функция
		 */
		return function (navigateObj: RouteInterfaces.TNavigateObj, navigate: NavigateFunction): RouteInterfaces.TNavigateObj {
			return { ...navigateObj, navigateFunc: navigate };
		};
	}
}
