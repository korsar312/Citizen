import StylesModule from "../Implementation/Styles.module";
import { StylesInterface } from "../Styles.interface";

export class StylesUseCase {
	private module;

	constructor() {
		this.module = StylesModule().invoker();
		this.initStore();
	}

	private initStore(): void {
		const userLang = this.module.service.getUserTheme();
		const styleObj = this.module.service.createStyleObj(userLang);

		this.module.service.store.setStore(styleObj);
	}

	public setTheme(theme: StylesInterface.ETheme): void {
		const storeStyle = this.module.service.store.getStore();

		this.module.domain.setTheme(storeStyle, theme);
	}

	public isLightTheme(): boolean {
		const storeStyle = this.module.service.store.getStore();

		return this.module.domain.isLightTheme(storeStyle);
	}

	public getTheme(): StylesInterface.ETheme {
		const storeStyle = this.module.service.store.getStore();

		return this.module.domain.getTheme(storeStyle);
	}
}
