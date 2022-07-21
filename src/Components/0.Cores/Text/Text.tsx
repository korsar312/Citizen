import React, { FC } from "react";
import { variablesColorsInterface } from "../../../Styles/Variables/VariablesColors/VariablesColors.interface";
import styles from "./Text.styles";
import { LanguageInterface } from "../../../Logic/Modules/Language/Language.interface";
import modules from "../../../Logic/Modules";
import { variablesFontsInterface } from "../../../Styles/Variables/VariablesFonts/VariablesFonts.interface";

interface IText {
	text: TText;
	color?: variablesColorsInterface.TColorChoice;
	font?: variablesFontsInterface.TFontChoice;
	caseWord?: TModeReturnWord;
}

type TText = LanguageInterface.TAllLanguageWord | string | number;
type TModeReturnWord = "CAPITAL" | "SMALL";

const Text: FC<IText> = (props) => {
	const {
		text,
		color = { color: "NEUTRAL", shard: "NEUTRAL_1" },
		font = { fontSize: "BODY", fontWeight: "NORMAL" },
		caseWord,
	} = props;

	const wordTranslate = (word: TText): string => {
		const wordTranslate = String(
			word in LanguageInterface.allLanguageWord
				? modules.language.service.getText(word as LanguageInterface.TAllLanguageWord)
				: word,
		);

		if (caseWord) {
			switch (caseWord) {
				case "CAPITAL":
					return wordTranslate.toUpperCase();
				case "SMALL":
					return wordTranslate.toLowerCase();
			}
		} else {
			return wordTranslate;
		}
	};

	return <span css={[styles.color(color), styles.font(font)]}>{wordTranslate(text)}</span>;
};

export default Text;
