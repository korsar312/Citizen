import { StylesInterface } from "../../../Styles.interface";

export class GetTheme {
	static execute(module: StylesInterface.IModules) {
		return function (): StylesInterface.ETheme {
			const storeStyle = module.service.store.getStore();

			return module.domain.getTheme(storeStyle);
		};
	}
}
