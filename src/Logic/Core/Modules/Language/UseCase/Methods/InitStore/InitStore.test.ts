import LanguageModules from "../../../Implementation/Language.module";
import { LanguageInterface } from "../../../Language.interface";
import { InitStore } from "./InitStore";

describe("InitStore", () => {
	let module: LanguageInterface.IModules;

	beforeEach(() => {
		module = LanguageModules().invoker();
	});

	it("должен создать объект с RU model если navigator = RU", () => {
		Object.defineProperty(window, "navigator", {
			get() {
				return { language: "ru-RU" };
			},
		});

		const result = InitStore.execute(module);
		result();

		expect(module.service.store.getStore().model).toBe(LanguageInterface.ELanguageType.RU);
	});

	it("должен создать объект с EN model если navigator = EN", () => {
		Object.defineProperty(window, "navigator", {
			get() {
				return { language: "en-US" };
			},
		});

		const result = InitStore.execute(module);
		result();

		expect(module.service.store.getStore().model).toBe(LanguageInterface.ELanguageType.EN);
	});

	it("должен создать объект с EN model если нет navigator", () => {
		Object.defineProperty(window, "navigator", {
			get() {
				return undefined;
			},
		});

		const result = InitStore.execute(module);
		result();

		expect(module.service.store.getStore().model).toBe(LanguageInterface.ELanguageType.EN);
	});

	it("должен создать объект с EN model если navigator = xx-XX", () => {
		Object.defineProperty(window, "navigator", {
			get() {
				return { language: "xx-XX" };
			},
		});

		const result = InitStore.execute(module);
		result();

		expect(module.service.store.getStore().model).toBe(LanguageInterface.ELanguageType.EN);
	});
});
