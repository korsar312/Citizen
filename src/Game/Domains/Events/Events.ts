import { InjectionsInterface } from "../../Injections/Injections.Interface";

export class Events {
	private injection: InjectionsInterface.IInjections;

	constructor(injections: InjectionsInterface.IInjections) {
		this.injection = injections;
	}
}
