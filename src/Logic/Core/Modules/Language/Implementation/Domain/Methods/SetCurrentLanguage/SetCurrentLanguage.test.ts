import { LanguageInterface } from "../../../../Language.interface";
import { SetCurrentLanguage } from "./SetCurrentLanguage";

describe("SetCurrentLanguage", () => {
	const execute = SetCurrentLanguage.execute();

	it("установить RU язык из EN", () => {
		const languageObj = {
			model: LanguageInterface.ELanguageType.EN,
		};

		const result = execute(languageObj, LanguageInterface.ELanguageType.RU);

		expect(result).toEqual({
			model: LanguageInterface.ELanguageType.RU,
		});
	});

	it("установить EN язык из RU", () => {
		const languageObj = {
			model: LanguageInterface.ELanguageType.RU,
		};

		const result = execute(languageObj, LanguageInterface.ELanguageType.EN);

		expect(result).toEqual({
			model: LanguageInterface.ELanguageType.EN,
		});
	});

	it("установить EN язык из EN", () => {
		const languageObj = {
			model: LanguageInterface.ELanguageType.EN,
		};

		const result = execute(languageObj, LanguageInterface.ELanguageType.EN);

		expect(result).toEqual({
			model: LanguageInterface.ELanguageType.EN,
		});
	});
});
