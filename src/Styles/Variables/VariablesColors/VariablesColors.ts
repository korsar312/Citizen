import { variablesColorsInterface } from "./VariablesColors.interface";

export class VariablesColors {
	private readonly color: variablesColorsInterface.TColor = {
		DARK: {
			RED: "#333333",
			BLUE: "#333333",
		},
		LIGHT: {
			RED: "#333333",
			BLUE: "#333333",
		},
	};

	private hex2rgba = (hex: string, opacity = 1) => {
		const RGB = String(hex.match(/\w\w/g)?.map((x) => parseInt(x, 16)));
		return `rgba(${RGB}, ${opacity})`;
	};

	public getColor(color: variablesColorsInterface.EColor, opacity: number = 1) {
		return this.hex2rgba(this.color["DARK"][color], opacity);
	}
}
