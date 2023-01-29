import { StylesDomain } from "./Implementation/Domain/Styles.domain";
import { StylesService } from "./Implementation/Service/Styles.service";

export namespace StylesInterface {
	/**
	 * Список цветовых тем
	 */
	export enum ETheme {
		"LIGHT" = "LIGHT",
		"DARK" = "DARK",
	}

	/**
	 * Основной стилевой объект
	 */
	export type TStyleObj = {
		theme: ETheme;
	};

	/**
	 * Домен и сервис
	 */
	export interface IModules {
		domain: StylesDomain;
		service: StylesService;
	}
}
