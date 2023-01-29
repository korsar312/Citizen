import factory from "../../../Factory/Factory";
import { LanguageDomain } from "./Domain/Language.domain";
import { LanguageService } from "./Service/Language.service";

const LanguageModules = () =>
	factory.create("LanguageModule").factoryMethod({
		domain: new LanguageDomain(),
		service: new LanguageService(),
	});

export default LanguageModules;
