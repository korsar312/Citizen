import { StylesInterface } from "../../Styles.interface";

export class StylesDomain {
	/**
	 * Светлая ли сейчас тема активна
	 * @param styleObj - стилевой объект
	 */
	public isLightTheme(styleObj: StylesInterface.TStyleObj): boolean {
		return styleObj.theme === StylesInterface.ETheme.LIGHT;
	}

	/**
	 * Устанавливает выбранную тему
	 * @param styleObj - стилевой объект
	 * @param theme - тема
	 */
	public setTheme(styleObj: StylesInterface.TStyleObj, theme: StylesInterface.ETheme): void {
		styleObj.theme = theme;
	}

	/**
	 * Возвращает выбранную тему
	 * @param styleObj - стилевой объект
	 */
	public getTheme(styleObj: StylesInterface.TStyleObj): StylesInterface.ETheme {
		return styleObj.theme;
	}
}
