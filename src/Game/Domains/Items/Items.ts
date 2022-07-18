import {injectionsInterface} from "../../Injections/Injections.interface";

export class Items {
	private injection: injectionsInterface.IInjections;

	constructor(injections: injectionsInterface.IInjections) {
		this.injection = injections;
	}

}
