import { StoreRoutes } from "./Methods/StoreRoutes/StoreRoutes";
import { CreateNavigateObj } from "./Methods/CreateNavigateObj/CreateNavigateObj";
import { GetRoutesPath } from "./Methods/GetRoutesPath/GetRoutesPath";

export class RoutesService {
	public getRoutesPath = GetRoutesPath.execute();
	public createNavigateObj = CreateNavigateObj.execute();
	public store = new StoreRoutes().execute();
}
