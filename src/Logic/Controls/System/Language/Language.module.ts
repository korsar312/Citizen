import { LanguageService } from "./Language.service";
import { LanguageStore } from "./Language.store";

export class LanguageModule {
	public service: LanguageService;
	public store: LanguageStore;

	constructor() {
		this.store = new LanguageStore();
		this.service = new LanguageService(this.store);
	}
}
