import { CheckUserLanguage } from "./CheckUserLanguage";
import { LanguageInterface } from "../../../../Language.interface";

describe("CheckUserLanguage", () => {
	const execute = CheckUserLanguage.execute();

	it("возвращает язык RU, когда он находится в languageArr", () => {
		const languageUser = "RU";
		const languageArr = [LanguageInterface.ELanguageType.RU, LanguageInterface.ELanguageType.EN];
		const result = execute(languageUser, languageArr);

		expect(result).toBe(LanguageInterface.ELanguageType.RU);
	});

	it("возвращает язык EN, когда он находится в languageArr", () => {
		const languageUser = "EN";
		const languageArr = [LanguageInterface.ELanguageType.RU, LanguageInterface.ELanguageType.EN];
		const result = execute(languageUser, languageArr);

		expect(result).toBe(LanguageInterface.ELanguageType.EN);
	});

	it("возвращает язык EN, если язык пользователя не в languageArr", () => {
		const languageUser = "DE";
		const languageArr = [LanguageInterface.ELanguageType.RU, LanguageInterface.ELanguageType.EN];
		const result = execute(languageUser, languageArr);

		expect(result).toBe(LanguageInterface.ELanguageType.EN);
	});
});
