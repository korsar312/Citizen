import { GetUserLanguage } from "./GetUserLanguage";
import { LanguageInterface } from "../../../../Language.interface";

describe("GetUserLanguage", () => {
	const execute = GetUserLanguage.execute();

	it("возвращает пользовательский язык RU", () => {
		Object.defineProperty(window, "navigator", {
			get() {
				return { language: "ru-RU" };
			},
		});

		const result = execute();

		expect(result).toBe(LanguageInterface.ELanguageType.RU);
	});

	it("возвращает пользовательский язык EN", () => {
		Object.defineProperty(window, "navigator", {
			get() {
				return { language: "en-US" };
			},
		});

		const result = execute();

		expect(result).toBe(LanguageInterface.ELanguageType.EN);
	});

	it("возвращает язык EN если нет навигатора", () => {
		Object.defineProperty(window, "navigator", {
			get() {
				return null;
			},
		});

		const result = execute();

		expect(result).toBe(LanguageInterface.ELanguageType.EN);
	});
});
