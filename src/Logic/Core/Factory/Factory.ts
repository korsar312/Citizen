import { TFactoryCreators } from "./Factory.enam";
import ModulesCreator from "./Variables/FactoryModules";
import StoreCreator from "./Variables/FactoryStore";

type TFac = TFactoryCreators;
type KTFac = keyof TFac;

export interface ICreator<CLASS, PROPS> {
	factoryMethod(props?: PROPS): CLASS;
}

class Factory {
	private creators: Map<KTFac, TFac[KTFac]> = new Map();

	public register<T extends KTFac>(key: T, creator: TFac[T]): void {
		this.creators.set(key, creator);
	}

	public create<H, T extends KTFac>(key: T): TFac[T] {
		const creator = this.creators.get(key);
		if (!creator) {
			throw new Error(`${key} not registered as a creator.`);
		}
		// @ts-ignore
		return creator;
	}
}

const factory = new Factory();

export default factory;

factory.register("LanguageModule", new ModulesCreator());
factory.register("LanguageStore", new StoreCreator());

factory.register("RouterModule", new ModulesCreator());
factory.register("RouterStore", new StoreCreator());

factory.register("StyleModule", new ModulesCreator());
factory.register("StyleStore", new StoreCreator());
