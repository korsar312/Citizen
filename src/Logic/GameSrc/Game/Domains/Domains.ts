import { TimesModule } from "./Times/Times.module";

export class Domains {
	public times: TimesModule;

	constructor() {
		this.times = new TimesModule();
	}
}

export default new Domains();
