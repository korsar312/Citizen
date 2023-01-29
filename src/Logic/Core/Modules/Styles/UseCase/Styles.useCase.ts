import StylesModule from "../Implementation/Styles.module";
import { SetTheme } from "./Methods/SetTheme/SetTheme";
import { IsLightTheme } from "./Methods/IsLightTheme/IsLightTheme";
import { GetTheme } from "./Methods/GetTheme/GetTheme";
import { InitStore } from "./Methods/InitStore/InitStore";

export class StylesUseCase {
	private module = StylesModule().invoker();
	private initStore = InitStore.execute(this.module);

	constructor() {
		this.initStore();
	}

	public setTheme = SetTheme.execute(this.module);
	public isLightTheme = IsLightTheme.execute(this.module);
	public getTheme = GetTheme.execute(this.module);
}
