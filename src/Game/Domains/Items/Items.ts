import { InjectionsInterface } from "../../Injections/Injections.Interface";

export class Items {
	private injection: InjectionsInterface.IInjections;

	constructor(injections: InjectionsInterface.IInjections) {
		this.injection = injections;
	}
}
