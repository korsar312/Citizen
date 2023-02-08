import { CreateLanguageObj } from "./CreateLanguageObj";
import { LanguageInterface } from "../../../../Language.interface";

describe("CreateLanguage", () => {
	const execute = CreateLanguageObj.execute();

	it("создание объекта с RU языком", () => {
		const result = execute(LanguageInterface.ELanguageType.RU);

		expect(result).toEqual({ model: LanguageInterface.ELanguageType.RU });
	});

	it("создание объекта с EN языком", () => {
		const result = execute(LanguageInterface.ELanguageType.EN);

		expect(result).toEqual({ model: LanguageInterface.ELanguageType.EN });
	});
});
