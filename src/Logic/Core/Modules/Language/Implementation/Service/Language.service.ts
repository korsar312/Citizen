import { TransformLangToArr } from "./Methods/TransformLangToArr/TransformLangToArr";
import { GetUserLanguage } from "./Methods/GetUserLanguage/GetUserLanguage";
import { CreateLanguageObj } from "./Methods/CreateLanguageObj/CreateLanguageObj";
import { GetDictionary } from "./Methods/GetDictionary/GetDictionary";
import { StoreLanguage } from "./Methods/StoreLanguage/StoreLanguage";

export class LanguageService {
	public store = new StoreLanguage().execute();
	public getDictionary = GetDictionary.execute();
	public createLanguageObj = CreateLanguageObj.execute();
	public getUserLanguage = GetUserLanguage.execute();
	public transformLangToArr = TransformLangToArr.execute();
}
