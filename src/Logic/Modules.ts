import { RouteModule } from "./Modules/Routes/Route.module";
import { LanguageModule } from "./Modules/Language/Language.module";
import { SettingsModule } from "./Modules/Settings/Settings.module";

class Modules {
	public setting: SettingsModule;
	public language: LanguageModule;
	public routes: RouteModule;

	constructor() {
		this.setting = new SettingsModule();
		this.language = new LanguageModule();
		this.routes = new RouteModule();
	}
}

export default new Modules();
