import { makeAutoObservable } from "mobx";
import { SettingInterface } from "./Colors.interface";

export class ColorsStore {
	private theme: SettingInterface.ETheme = SettingInterface.ETheme.DARK;

	constructor() {
		makeAutoObservable(this);
	}

	/**
	 * Устанавливает выбранную тему
	 * @param theme - тема
	 */
	public setTheme(theme: SettingInterface.ETheme) {
		this.theme = theme;
	}

	/**
	 * Светлая ли сейчас тема активна
	 */
	public isLightTheme() {
		return this.theme === SettingInterface.ETheme.LIGHT;
	}

	/**
	 * Возвращает выбранную тему
	 */
	public getTheme() {
		return this.theme;
	}
}
