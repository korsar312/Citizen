import { StylesInterface } from "../../../../Styles.interface";

export class IsLightTheme {
	static execute() {
		/**
		 * Светлая ли сейчас тема активна
		 * @param styleObj - стилевой объект
		 */
		return function (styleObj: StylesInterface.TStyleObj): boolean {
			return styleObj.theme === StylesInterface.ETheme.LIGHT;
		};
	}
}
