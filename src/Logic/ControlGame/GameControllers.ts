import { LocationsInterface } from "./GameResources/Locations/Locations.interface";
import { SavingModule } from "./Saving/Saving.module";
import { HeroModule } from "./Hero/Hero.module";
import { GameResources } from "./GameResources/GameResources";

class GameControllers {
	private readonly resources: GameResources;
	private hero: HeroModule;
	private save: SavingModule;

	constructor() {
		this.resources = new GameResources();
		this.hero = new HeroModule({ locate: this.resources.locate.locationsPlaces.FARUND.dialog.EASTWALL() });
		this.save = new SavingModule();
	}

	/**
	 * Реализация перехода на локации
	 * @param dialogLine - объект локации
	 */
	public goLocations(dialogLine: LocationsInterface.TDialogLine) {
		const { loc, dialog, options } = dialogLine.path;
		this.hero.store.setCurrentLocate({ ...this.resources.locate.locationsPlaces[loc].dialog[dialog](), ...options });
	}

	/**
	 * Получить локацию ГГ
	 */
	public getHeroLocation() {
		return this.hero.store.getCurrentLocate();
	}

	/**
	 * Возвращает список дней по порядку и их наименования
	 */
	public getDays() {
		return this.resources.domains.times.store.getDays();
	}

	/**
	 * Возвращает текущую дату и время
	 */
	public getCurrentDate() {
		return this.resources.domains.times.store.getCurrentDate();
	}
}

export default new GameControllers();
