import { NavigateFunction } from "react-router-dom";
import { SetNavigateFunc } from "./SetNavigateFunc";

describe("SetNavigateFunc", () => {
	const result = SetNavigateFunc.execute();
	const navigateFunc: NavigateFunction = jest.fn();

	it("устанавливает функцию", () => {
		const navigateObj = { navigateFunc: null };

		// @ts-ignore
		expect(result(navigateObj, null)).toEqual({ navigateFunc: null });
		expect(result(navigateObj, navigateFunc)).toEqual({ navigateFunc });
	});
});
