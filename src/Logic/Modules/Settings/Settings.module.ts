import { SettingStore } from "./Setting.store";

export class SettingsModule {
	public store: SettingStore;

	constructor() {
		this.store = new SettingStore();
	}
}
