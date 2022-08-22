import { SavingInterface } from "./Saving.interface";

export class SavingServices {
	private save: SavingInterface.TSave = {
		date: {
			year: 1000,
			day: 4,
			week: 5,
			minute: 45,
			hour: 12,
			month: 10,
		},
	};

	setSave(save: SavingInterface.TSave) {
		this.save = save;
	}

	getSave() {
		return this.save;
	}
}
