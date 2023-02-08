import { RoutesService } from "./Service/Routes.service";
import { RoutesDomain } from "./Domain/Routes.domain";
import factory from "../../../Helpers/Factory/Factory";

const RoutesModule = () =>
	factory.create("RouterModule").factoryMethod({
		domain: new RoutesDomain(),
		service: new RoutesService(),
	});

export default RoutesModule;
