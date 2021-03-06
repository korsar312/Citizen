import React, { FC } from "react";
import { variablesColorsInterface } from "../../../Styles/Variables/VariablesColors/VariablesColors.interface";
import styles from "./Text.styles";
import { LanguageInterface } from "../../../Logic/Modules/Language/Language.interface";
import modules from "../../../Logic/Modules";
import { variablesFontsInterface } from "../../../Styles/Variables/VariablesFonts/VariablesFonts.interface";
import { observer } from "mobx-react";

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

	const localization = (word: TText) =>
		String(
			word in LanguageInterface.allLanguageWord
				? modules.language.service.getText(word as LanguageInterface.TAllLanguageWord)
				: word,
		);

	const wordTranslate = (word: TText): string => {
		const wordTranslate = localization(word);

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

	return <span css={[styles.wrapper, styles.color(color), styles.font(font)]}>{wordTranslate(text)}</span>;
};

export default observer(Text);
