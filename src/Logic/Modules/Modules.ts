import { RouteModule } from "./Routes/Route.module";
import { LanguageModule } from "./Language/Language.module";
import { ColorsModule } from "./Colors/Colors.module";

class Modules {
	public setting: ColorsModule;
	public language: LanguageModule;
	public routes: RouteModule;

	constructor() {
		this.setting = new ColorsModule();
		this.language = new LanguageModule();
		this.routes = new RouteModule();
	}
}

export default new Modules();
