import { getArray } from "./getArray/getArray";
import { getStringCurrentTime } from "./getStringCurrentTime/getStringCurrentTime";

export class Utils {
	/** Возвращает текущее время */
	public getStringCurrentTime = getStringCurrentTime();

	/** Возвращает массив */
	public getArray = getArray;
}
