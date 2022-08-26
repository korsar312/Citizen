import { LocationsInterface } from "../GameResources/Locations/Locations.interface";
import { HeroInterface } from "./Hero.interface";
import { makeAutoObservable } from "mobx";

export class HeroStore {
	private currentLocate: LocationsInterface.TDialog;

	constructor(hero: HeroInterface.THero) {
		this.currentLocate = hero.locate;
		makeAutoObservable(this);
	}

	/**
	 * Получить текущую локацию ГГ
	 */
	public getCurrentLocate() {
		return this.currentLocate;
	}

	/**
	 * Установить текущую локацию ГГ
	 * @param locate - объект локации
	 */
	public setCurrentLocate(locate: LocationsInterface.TDialog) {
		this.currentLocate = locate;
	}
}
