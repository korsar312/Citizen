import { LanguageInterface } from "../../../../Language.interface";
import { GetText } from "./GetText";

describe("GetText", () => {
	const execute = GetText.execute();
	const languageDictionary = {
		EXIT: {
			RU: "Выход",
			EN: "Exit",
		},
		NO_PAGE: {
			EN: "No Page",
			RU: "Нет страницы",
		},
	} as LanguageInterface.TLanguage;

	it("возвращает RU текст для EXIT", () => {
		const langModel = LanguageInterface.ELanguageType.RU;

		const result = execute(languageDictionary, "EXIT", langModel);

		expect(result).toBe("Выход");
	});

	it("возвращает EN текст для EXIT", () => {
		const langModel = LanguageInterface.ELanguageType.EN;

		const result = execute(languageDictionary, "EXIT", langModel);

		expect(result).toBe("Exit");
	});

	it("возвращает RU текст для NO_PAGE", () => {
		const langModel = LanguageInterface.ELanguageType.RU;

		const result = execute(languageDictionary, "NO_PAGE", langModel);

		expect(result).toBe("Нет страницы");
	});

	it("возвращает EN текст для NO_PAGE", () => {
		const langModel = LanguageInterface.ELanguageType.EN;

		const result = execute(languageDictionary, "NO_PAGE", langModel);

		expect(result).toBe("No Page");
	});
});
