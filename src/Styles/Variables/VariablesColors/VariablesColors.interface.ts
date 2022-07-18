export namespace variablesColorsInterface {
	export enum ETheme {
		DARK = "DARK",
		LIGHT = "LIGHT",
	}

	export enum EColor {
		BLUE = "BLUE",
		RED = "RED",
	}

	export type TColor = {
		[key in ETheme]: {
			[key in EColor]: string;
		};
	};
}
