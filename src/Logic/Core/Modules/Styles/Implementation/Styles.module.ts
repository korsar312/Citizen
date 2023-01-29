import factory from "../../../Factory/Factory";
import { StylesDomain } from "./Domain/Styles.domain";
import { StylesService } from "./Service/Styles.service";

const LanguageModules = () =>
	factory.create("StyleModule").factoryMethod({
		domain: new StylesDomain(),
		service: new StylesService(),
	});

export default LanguageModules;
