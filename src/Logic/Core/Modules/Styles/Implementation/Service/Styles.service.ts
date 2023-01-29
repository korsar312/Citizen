import { StoreStyles } from "./Methods/StoreStyles/StoreStyles";
import { CreateStyleObj } from "./Methods/CreateStyleObj/CreateStyleObj";
import { GetUserTheme } from "./Methods/GetUserTheme/GetUserTheme";

export class StylesService {
	public store = new StoreStyles().execute();
	public getUserTheme = GetUserTheme.execute();
	public createStyleObj = CreateStyleObj.execute();
}
