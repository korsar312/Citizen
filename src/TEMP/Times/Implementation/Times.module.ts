import factory from "../../../Logic/Core/Helpers/Factory/Factory";
import { TimesDomain } from "./Domain/Times.domain";
import { TimesService } from "./Service/Times.service";

const TimeModules = () =>
	factory.create("TimeModule").factoryMethod({
		domain: new TimesDomain(),
		service: new TimesService(),
	});

export default TimeModules;
