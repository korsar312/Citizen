import { InjectionsInterface } from "../../Injections/Injections.Interface";

export class Enemies {
	private injection: InjectionsInterface.IInjections;

	constructor(injections: InjectionsInterface.IInjections) {
		this.injection = injections;
	}
}
