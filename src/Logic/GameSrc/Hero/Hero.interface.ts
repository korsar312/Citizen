import { LocationsInterface } from "../GameResources/Locations/Locations.interface";

export namespace HeroInterface {
	/**
	 * Описание текущего состояния героя
	 */
	export type THero = {
		locate: LocationsInterface.TDialog;
	};
}
