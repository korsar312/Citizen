import { LanguageInterface } from "../Language.interface";
import LanguageModules from "../Implementation/Language.module";

export class LanguageUseCase {
	private readonly module;

	constructor() {
		this.module = LanguageModules().invoker();
		this.initStore();
	}

	private initStore(): void {
		const userLang = this.module.service.getUserLanguage();
		const langArr = this.module.service.transformLangToArr();
		const sysLang = this.module.domain.checkUserLanguage(userLang, langArr);
		const languageObj = this.module.service.createLanguageObj(sysLang);

		this.module.service.store.setStore(languageObj);
	}

	setCurrentLanguage(languageType: LanguageInterface.ELanguageType): void {
		const storeLanguage = this.module.service.store.getStore();

		this.module.domain.setCurrentLanguage(storeLanguage, languageType);
	}

	getCurrentLanguage(): LanguageInterface.ELanguageType {
		const storeLanguage = this.module.service.store.getStore();

		return this.module.domain.getCurrentLanguage(storeLanguage);
	}

	getText(wordKey: LanguageInterface.TAllLanguageWord): string {
		const dict = this.module.service.getDictionary();
		const storeLanguage = this.module.service.store.getStore();
		const curLang = this.module.domain.getCurrentLanguage(storeLanguage);

		return this.module.domain.getText(dict, wordKey, curLang);
	}
}
