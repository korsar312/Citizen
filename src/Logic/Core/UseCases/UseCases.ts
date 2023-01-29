import { LanguageUseCase } from "../Modules/Language/UseCase/Language.useCase";
import { RoutesUseCase } from "../Modules/Routes/UseCase/Routes.useCase";
import libs from "../../Libs/Libs";
import { StylesUseCase } from "../Modules/Styles/UseCase/Styles.useCase";

function interactor<MODULE>(module: MODULE) {
	return function <TARGET extends keyof MODULE, METHOD extends keyof MODULE[TARGET], ARGS extends MODULE[TARGET][METHOD]>(
		target: TARGET,
		method: METHOD,
		...args: ARGS extends (...args: infer P) => unknown ? Parameters<ARGS> : unknown[]
	): ARGS extends (...args: infer P) => any ? ReturnType<ARGS> : unknown {
		const chosenMethod = module[target][method];
		return libs.utils.polymorph(chosenMethod, module[target], args);
	};
}

class UseCasesModules {
	language: LanguageUseCase;
	router: RoutesUseCase;
	style: StylesUseCase;

	constructor() {
		this.language = new LanguageUseCase();
		this.router = new RoutesUseCase();
		this.style = new StylesUseCase();
	}
}

const modules = new UseCasesModules();

class UseCases {
	public get interactor() {
		return interactor(modules);
	}
}

export default new UseCases();
