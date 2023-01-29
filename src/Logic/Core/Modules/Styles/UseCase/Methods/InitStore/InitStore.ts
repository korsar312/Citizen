import { StylesInterface } from "../../../Styles.interface";

export class InitStore {
	static execute(module: StylesInterface.IModules) {
		return function (): void {
			const userLang = module.service.getUserTheme();
			const styleObj = module.service.createStyleObj(userLang);

			module.service.store.setStore(styleObj);
		};
	}
}
