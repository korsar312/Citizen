import { LanguageInterface } from "../../../../Language.interface";
import { GetCurrentLanguage } from "./GetCurrentLanguage";

describe("GetCurrentLanguage", () => {
	const execute = GetCurrentLanguage.execute();

	it("возвращает RU язык", () => {
		const languageObj = {
			model: LanguageInterface.ELanguageType.RU,
		};

		const result = execute(languageObj);

		expect(result).toBe(LanguageInterface.ELanguageType.RU);
	});

	it("возвращает EN язык", () => {
		const languageObj = {
			model: LanguageInterface.ELanguageType.EN,
		};

		const result = execute(languageObj);

		expect(result).toBe(LanguageInterface.ELanguageType.EN);
	});
});
