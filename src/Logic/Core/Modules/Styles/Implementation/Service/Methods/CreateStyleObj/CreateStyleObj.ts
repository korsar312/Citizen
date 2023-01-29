import { StylesInterface } from "../../../../Styles.interface";

export class CreateStyleObj {
	static execute() {
		/**
		 * Создает стилевой объект
		 */
		return function (theme: StylesInterface.ETheme): StylesInterface.TStyleObj {
			return { theme: theme };
		};
	}
}
