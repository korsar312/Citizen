import { GetNavigateFunc } from "./GetNavigateFunc";

describe("GetNavigateFunc", () => {
	const navigateFunc = jest.fn();

	const result = GetNavigateFunc.execute();

	it("должен вернуть правильную функцию навигации", () => {
		const navObj = {
			navigateFunc: navigateFunc,
		};

		expect(result(navObj)).toBe(navigateFunc);
	});

	it("должен возвращать значение null, если функция навигации не предоставляется", () => {
		const navObj = {
			navigateFunc: null,
		};

		expect(result(navObj)).toBeNull();
	});
});
