import RoutesModule from "../Implementation/Routes.module";
import { GetRoutesPath } from "./Methods/GetRoutesPath/GetRoutesPath";
import { GetNavigateFunc } from "./Methods/GetNavigateFunc/GetNavigateFunc";
import { SetNavigateFunc } from "./Methods/SetNavigateFunc/SetNavigateFunc";
import { RouterGo } from "./Methods/RouterGo/RouterGo";
import { InitStore } from "./Methods/InitStore/InitStore";

export class RoutesUseCase {
	private module = RoutesModule().invoker();
	private initStore = InitStore.execute(this.module);

	constructor() {
		this.initStore();
	}

	public routerGo = RouterGo.execute(this.module);
	public setNavigateFunc = SetNavigateFunc.execute(this.module);
	public getNavigateFunc = GetNavigateFunc.execute(this.module);
	public getRoutesPath = GetRoutesPath.execute(this.module);
}
