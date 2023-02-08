import { TransformLangToArr } from "./TransformLangToArr";
import { LanguageInterface } from "../../../../Language.interface";

describe("TransformLangToArr", () => {
	const execute = TransformLangToArr.execute();

	it("Возвращает все доступные языки", () => {
		const result = execute();

		expect(result).toEqual(Object.keys(LanguageInterface.ELanguageType));
	});
});
