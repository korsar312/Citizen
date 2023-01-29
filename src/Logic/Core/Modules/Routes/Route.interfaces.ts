import { NavigateFunction, RouteObject } from "react-router-dom";
import { RoutesDomain } from "./Implementation/Domain/Routes.domain";
import { RoutesService } from "./Implementation/Service/Routes.service";

export namespace RouteInterfaces {
	/**
	 * Имя пути и путь роута
	 */
	export enum PathName {
		HOME = "/",
		ERROR = "*",
	}

	/**
	 * Тип для пути
	 */
	export interface IRoute extends Omit<RouteObject, "path"> {
		path: PathName;
		children?: IRoute[];
	}

	/**
	 * Основной навигационный объект
	 */
	export type TNavigateObj = {
		navigateFunc: NavigateFunction | null;
	};

	/**
	 * Домен и сервис
	 */
	export interface IModules {
		domain: RoutesDomain;
		service: RoutesService;
	}
}
