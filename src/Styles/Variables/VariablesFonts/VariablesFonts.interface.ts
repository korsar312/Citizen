import { CSSObject } from "@emotion/react";

export namespace variablesFontsInterface {
	type fontSize = {
		EXTRABIG: "EXTRABIG";
		BIG: "BIG";
		BODY: "BODY";
		SMALL: "SMALL";
	};

	type fontWeight = {
		FAT: "FAT";
		NORMAL: "NORMAL";
		THIN: "THIN";
	};

	export type EFontWeight = keyof fontWeight;
	export type EFontSize = keyof fontSize;

	type TFontSize = {
		[key in EFontSize]: CSSObject;
	};

	type TFontWeight = {
		[key in EFontWeight]: CSSObject;
	};

	export type TFont = {
		fontStandard: CSSObject;
		fontSize: TFontSize;
		fontWeight: TFontWeight;
	};

	export type TFontChoice = {
		fontSize: EFontSize;
		fontWeight: EFontWeight;
	};
}
