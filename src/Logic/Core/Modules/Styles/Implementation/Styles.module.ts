import factory from "../../../Helpers/Factory/Factory";
import { StylesDomain } from "./Domain/Styles.domain";
import { StylesService } from "./Service/Styles.service";

const StyleModules = () =>
	factory.create("StyleModule").factoryMethod({
		domain: new StylesDomain(),
		service: new StylesService(),
	});

export default StyleModules;
