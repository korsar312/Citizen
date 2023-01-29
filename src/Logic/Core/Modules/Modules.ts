import { LanguageUseCase } from "./Language/UseCase/Language.useCase";
import { RoutesUseCase } from "./Routes/UseCase/Routes.useCase";
import { StylesUseCase } from "./Styles/UseCase/Styles.useCase";

export class Modules {
	language: LanguageUseCase;
	router: RoutesUseCase;
	style: StylesUseCase;

	constructor() {
		this.language = new LanguageUseCase();
		this.router = new RoutesUseCase();
		this.style = new StylesUseCase();
	}
}
