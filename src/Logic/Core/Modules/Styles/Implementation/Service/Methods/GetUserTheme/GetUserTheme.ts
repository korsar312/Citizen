import { StylesInterface } from "../../../../Styles.interface";

export class GetUserTheme {
	static execute() {
		/**
		 * Возвращает тему пользователя
		 */
		return function (): StylesInterface.ETheme {
			const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			return isDark ? StylesInterface.ETheme.DARK : StylesInterface.ETheme.LIGHT;
		};
	}
}
