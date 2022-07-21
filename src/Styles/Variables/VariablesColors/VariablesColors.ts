import { variablesColorsInterface } from "./VariablesColors.interface";
import { VariablesColorsList } from "./VariablesColors.color";
import modules from "../../../Logic/Modules";

export class VariablesColors {
	private readonly color: variablesColorsInterface.TColor = VariablesColorsList;

	/**
	 * Преобразование HEX формата в RGBa
	 * @param hex - формата цвета HEX
	 * @param opacity - прозрачность
	 */
	private hex2rgba = (hex: string, opacity = 1) => {
		const RGB = String(hex.match(/\w\w/g)?.map((x) => parseInt(x, 16)));
		return `rgba(${RGB}, ${opacity})`;
	};

	/**
	 * Возвращает выбранной цвет с его оттенком
	 * @param colors - цвет и оттенок
	 * @param opacity - прозрачность
	 */
	public getColor(colors: variablesColorsInterface.TColorChoice, opacity: number = 1) {
		//TODO переделать чтоб ts не орал из за colors.shard
		//@ts-ignore
		const choseColor = String(this.color[modules.setting.store.getTheme()][colors.color][colors.shard]);
		return this.hex2rgba(choseColor, opacity);
	}
}

/*
public getColor<T extends keyof variablesColorsInterface.TColorAll>(
	color: T,
	shade: keyof variablesColorsInterface.TColorAll[T],
	opacity: number = 1,
) {
	const choseColor = String(this.color[modules.setting.store.getTheme()][color][shade]);
	return this.hex2rgba(choseColor, opacity);
}
 */
