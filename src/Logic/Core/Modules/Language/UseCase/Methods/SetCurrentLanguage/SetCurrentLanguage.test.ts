import LanguageModules from "../../../Implementation/Language.module";
import { LanguageInterface } from "../../../Language.interface";
import { SetCurrentLanguage } from "./SetCurrentLanguage";
import ELanguageType = LanguageInterface.ELanguageType;

describe("SetCurrentLanguage", () => {
	let module: LanguageInterface.IModules;

	beforeEach(() => {
		module = LanguageModules().invoker();
	});

	it("должен выкинуть ошибку так как нет первоначального значения", () => {
		const result = SetCurrentLanguage.execute(module);

		expect(() => result(ELanguageType.EN)).toThrow();
	});

	it("model должен быть с EN", () => {
		module.service.store.setStore({
			model: LanguageInterface.ELanguageType.RU,
		});

		const result = SetCurrentLanguage.execute(module);

		result(ELanguageType.RU);

		expect(module.service.store.getStore().model).toBe(LanguageInterface.ELanguageType.RU);
	});

	it("model должен быть с RU", () => {
		module.service.store.setStore({
			model: LanguageInterface.ELanguageType.RU,
		});

		const result = SetCurrentLanguage.execute(module);

		result(ELanguageType.EN);

		expect(module.service.store.getStore().model).toBe(LanguageInterface.ELanguageType.EN);
	});
});
