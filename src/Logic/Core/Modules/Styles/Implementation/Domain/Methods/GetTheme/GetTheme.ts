import { StylesInterface } from "../../../../Styles.interface";

export class GetTheme {
	static execute() {
		/**
		 * Возвращает выбранную тему
		 * @param styleObj - стилевой объект
		 */
		return function (styleObj: StylesInterface.TStyleObj): StylesInterface.ETheme {
			return styleObj.theme;
		};
	}
}
