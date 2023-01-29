import { StylesInterface } from "../../../Styles.interface";

export class SetTheme {
	static execute(module: StylesInterface.IModules) {
		return function (theme: StylesInterface.ETheme): void {
			const storeStyle = module.service.store.getStore();

			module.domain.setTheme(storeStyle, theme);
		};
	}
}
