import { GetTheme } from "./Methods/GetTheme/GetTheme";
import { SetTheme } from "./Methods/SetTheme/SetTheme";
import { IsLightTheme } from "./Methods/IsLightTheme/IsLightTheme";

export class StylesDomain {
	public isLightTheme = IsLightTheme.execute();
	public setTheme = SetTheme.execute();
	public getTheme = GetTheme.execute();
}
