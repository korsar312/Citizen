import { LocationsInterface } from "../Locations.interface";
import { LanguageInterface } from "../../../../../Modules/Language/Language.interface";

export class FarundDialog implements LocationsInterface.ILocation {
	start(): LocationsInterface.TDialog {
		return {
			id: "",
			image: "",
			dialog: [
				{
					dialogLine: LanguageInterface.ELanguageSimpleWord.EXIT,
					callback: () => "",
				},
			],
		};
	}
}
