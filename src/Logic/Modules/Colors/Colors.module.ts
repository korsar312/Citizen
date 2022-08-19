import { ColorsStore } from "./Colors.store";

export class ColorsModule {
	public store: ColorsStore;

	constructor() {
		this.store = new ColorsStore();
	}
}
