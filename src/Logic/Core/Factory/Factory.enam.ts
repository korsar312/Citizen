import { LanguageInterface } from "../Modules/Language/Language.interface";
import StoreCreator from "./Variables/FactoryStore";
import ModulesCreator from "./Variables/FactoryModules";
import { RouteInterfaces } from "../Modules/Routes/Route.interfaces";
import { LanguageService } from "../Modules/Language/Implementation/Service/Language.service";
import { LanguageDomain } from "../Modules/Language/Implementation/Domain/Language.domain";
import { RoutesDomain } from "../Modules/Routes/Implementation/Domain/Routes.domain";
import { RoutesService } from "../Modules/Routes/Implementation/Service/Routes.service";
import { StylesDomain } from "../Modules/Styles/Implementation/Domain/Styles.domain";
import { StylesService } from "../Modules/Styles/Implementation/Service/Styles.service";
import { StylesInterface } from "../Modules/Styles/Styles.interface";
import factory from "./Factory";

export type TFactoryCreators = {
	LanguageModule: ModulesCreator<LanguageDomain, LanguageService>;
	LanguageStore: StoreCreator<LanguageInterface.TLanguageObj>;

	RouterModule: ModulesCreator<RoutesDomain, RoutesService>;
	RouterStore: StoreCreator<RouteInterfaces.TNavigateObj>;

	StyleModule: ModulesCreator<StylesDomain, StylesService>;
	StyleStore: StoreCreator<StylesInterface.TStyleObj>;
};

export function registerModules() {
	factory.register("LanguageModule", new ModulesCreator());
	factory.register("LanguageStore", new StoreCreator());

	factory.register("RouterModule", new ModulesCreator());
	factory.register("RouterStore", new StoreCreator());

	factory.register("StyleModule", new ModulesCreator());
	factory.register("StyleStore", new StoreCreator());
}
