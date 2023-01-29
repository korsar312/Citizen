import { GetNavigateFunc } from "./Methods/GetNavigateFunc/GetNavigateFunc";
import { SetNavigateFunc } from "./Methods/SetNavigateFunc/SetNavigateFunc";
import { RouterGo } from "./Methods/RouterGo/RouterGo";

export class RoutesDomain {
	public routerGo = RouterGo.execute();
	public setNavigate = SetNavigateFunc.execute();
	public getNavigate = GetNavigateFunc.execute();
}
