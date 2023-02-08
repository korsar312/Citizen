import { LanguageInterface } from "../../../Language.interface";
import { GetCurrentLanguage } from "./GetCurrentLanguage";
import LanguageModules from "../../../Implementation/Language.module";

describe("GetCurrentLanguage", () => {
	let module: LanguageInterface.IModules;

	beforeEach(() => {
		module = LanguageModules().invoker();
	});

	it("должен выкинуть ошибку так как нет первоначального значения", () => {
		const getCurrentLanguage = GetCurrentLanguage.execute(module);

		expect(getCurrentLanguage).toThrow();
	});

	it("должен вернуть EN язык", () => {
		module.service.store.getStore = jest.fn(() => ({
			model: LanguageInterface.ELanguageType.EN,
		}));

		const getCurrentLanguage = GetCurrentLanguage.execute(module);

		expect(getCurrentLanguage()).toBe(LanguageInterface.ELanguageType.EN);
	});

	it("должен вернуть RU язык", () => {
		module.service.store.getStore = jest.fn(() => ({
			model: LanguageInterface.ELanguageType.RU,
		}));

		const getCurrentLanguage = GetCurrentLanguage.execute(module);

		expect(getCurrentLanguage()).toBe(LanguageInterface.ELanguageType.RU);
	});
});
