import {injectionsInterface} from "../../Injections/Injections.interface";

export class Enemies {
	private injection: injectionsInterface.IInjections;

	constructor(injections: injectionsInterface.IInjections) {
		this.injection = injections;
	}

}
