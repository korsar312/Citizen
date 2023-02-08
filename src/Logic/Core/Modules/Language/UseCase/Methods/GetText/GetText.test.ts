import { GetText } from "./GetText";
import LanguageModules from "../../../Implementation/Language.module";
import { LanguageInterface } from "../../../Language.interface";

describe("GetText", () => {
	let module: LanguageInterface.IModules;

	beforeEach(() => {
		module = LanguageModules().invoker();
	});

	it("должен выкинуть ошибку так как нет первоначального значения", () => {
		const result = GetText.execute(module);
		expect(() => result("EXIT")).toThrow();
	});

	it("should return the correct text for the given wordKey and language", () => {
		module.service.store.getStore = jest.fn(() => ({
			model: LanguageInterface.ELanguageType.RU,
		}));

		const result = GetText.execute(module)("EXIT");
		expect(result).toBe("Выход");
	});

	it("should return the correct text for the given wordKey and language", () => {
		module.service.store.getStore = jest.fn(() => ({
			model: LanguageInterface.ELanguageType.EN,
		}));

		const result = GetText.execute(module)("EXIT");
		expect(result).toBe("Exit");
	});
});
