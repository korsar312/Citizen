import { RouteModule } from "./Modules/Routes/Route.module";

class Modules {
	public routes: RouteModule;

	constructor() {
		this.routes = new RouteModule();
	}
}

const modules = new Modules();
export default modules;
