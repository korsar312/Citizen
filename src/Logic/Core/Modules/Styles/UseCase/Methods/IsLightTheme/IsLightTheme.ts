import { StylesInterface } from "../../../Styles.interface";

export class IsLightTheme {
	static execute(module: StylesInterface.IModules) {
		return function (): boolean {
			const storeStyle = module.service.store.getStore();

			return module.domain.isLightTheme(storeStyle);
		};
	}
}
