import { LanguageInterface } from "../../../../Language.interface";
import { dictionary } from "./Language.dictionary";

export class GetDictionary {
	static execute() {
		/**
		 * Возвращает словарь
		 */
		return function (): LanguageInterface.TLanguage {
			return dictionary;
		};
	}
}
