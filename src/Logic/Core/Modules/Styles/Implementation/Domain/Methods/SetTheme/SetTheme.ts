import { StylesInterface } from "../../../../Styles.interface";

export class SetTheme {
	static execute() {
		/**
		 * Устанавливает выбранную тему
		 * @param styleObj - стилевой объект
		 * @param theme - тема
		 */
		return function (styleObj: StylesInterface.TStyleObj, theme: StylesInterface.ETheme): void {
			styleObj.theme = theme;
		};
	}
}
