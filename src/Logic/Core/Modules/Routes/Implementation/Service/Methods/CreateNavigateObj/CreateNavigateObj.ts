import { RouteInterfaces } from "../../../../Route.interfaces";

export class CreateNavigateObj {
	static execute() {
		/**
		 * Создает навигационный объект
		 */
		return function (): RouteInterfaces.TNavigateObj {
			return { navigateFunc: null };
		};
	}
}
