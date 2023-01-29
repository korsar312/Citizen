import { getArray } from "./getArray/getArray";
import { getStringCurrentTime } from "./getStringCurrentTime/getStringCurrentTime";
import { polymorph } from "./polymorph/polymorph";

export class Utils {
	/** Возвращает массив */
	public getArray = getArray;

	/** Возвращает текущее время */
	public getStringCurrentTime = getStringCurrentTime;

	/** Возвращает необходимый тип */
	public polymorph = polymorph;
}
