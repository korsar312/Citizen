import { SettingInterface } from "../../../Logic/Modules/Colors/Colors.interface";

export namespace variablesColorsInterface {
	type EColorRainbow = {
		BLUE: "BLUE";
		GREEN: "GREEN";
		ORANGE: "ORANGE";
		RED: "RED";
		YELLOW: "YELLOW";
	};

	export type EColorShade = {
		LIGHT: "LIGHT";
		NORMAL: "NORMAL";
		DARK: "DARK";
		DARKER: "DARKER";
	};

	type EColorNeutral = {
		NEUTRAL: "NEUTRAL";
	};

	export type ENeutralShade = {
		NEUTRAL_1: "NEUTRAL_1";
		NEUTRAL_2: "NEUTRAL_2";
		NEUTRAL_3: "NEUTRAL_3";
		NEUTRAL_4: "NEUTRAL_4";
		NEUTRAL_5: "NEUTRAL_5";
		NEUTRAL_6: "NEUTRAL_6";
		NEUTRAL_7: "NEUTRAL_7";
		NEUTRAL_8: "NEUTRAL_8";
		NEUTRAL_9: "NEUTRAL_9";
		NEUTRAL_10: "NEUTRAL_10";
	};

	type TColor_1 = {
		[key in keyof EColorRainbow]: {
			[key in keyof EColorShade]: string;
		};
	};

	type TColor_2 = {
		[key in keyof EColorNeutral]: {
			[key in keyof ENeutralShade]: string;
		};
	};

	export type TColorAll = TColor_1 & TColor_2;

	export type TColor = {
		[key in SettingInterface.ETheme]: TColorAll;
	};

	// я хз как это по нормальному сделать
	export type TColorChoice =
		| {
				color: keyof EColorRainbow;
				shard: keyof EColorShade;
		  }
		| {
				color: keyof EColorNeutral;
				shard: keyof ENeutralShade;
		  };
}
