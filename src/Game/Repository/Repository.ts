import { RepositoryInterface } from "./Repository.interface";

class Repository {
	private save: RepositoryInterface.TSave = {
		date: {
			year: 1000,
			day: 4,
			week: 5,
			minute: 45,
			hour: 12,
			month: 10,
		},
	};

	setSave(save: RepositoryInterface.TSave) {
		this.save = save;
	}

	getSave() {
		return this.save;
	}
}

export default new Repository();
