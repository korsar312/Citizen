import { StoreLanguage } from "./StoreLanguage";
import { LanguageInterface } from "../../../../Language.interface";

describe("StoreLanguage", () => {
	let languageStore: StoreLanguage;

	beforeEach(() => {
		languageStore = new StoreLanguage();
	});

	it("Выдает ошибку при вызове стора без первоначальной установки", () => {
		const store = languageStore.execute();

		expect(store.getStore).toThrow();
	});

	it("Установить и получить стор", () => {
		const store = languageStore.execute();
		const RUStore = { model: LanguageInterface.ELanguageType.RU };
		const ENStore = { model: LanguageInterface.ELanguageType.EN };

		store.setStore(RUStore);
		expect(store.getStore()).toEqual(RUStore);

		store.setStore(ENStore);
		expect(store.getStore()).toEqual(ENStore);
	});
});
