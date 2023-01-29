import { LanguageInterface } from "../../../Language.interface";

export class GetText {
	static execute(module: LanguageInterface.IModules) {
		return function (wordKey: LanguageInterface.TAllLanguageWord): string {
			const dict = module.service.getDictionary();
			const storeLanguage = module.service.store.getStore();
			const curLang = module.domain.getCurrentLanguage(storeLanguage);

			return module.domain.getText(dict, wordKey, curLang);
		};
	}
}
