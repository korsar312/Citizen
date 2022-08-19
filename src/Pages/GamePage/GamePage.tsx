import React from "react";
import styles from "./GamePage.styles";
import WidgetCalendar from "../../Components/3.Substances/Widget/WidgetCalendar/WidgetCalendar";
import WidgetInformation from "../../Components/3.Substances/Widget/WidgetInformation/WidgetInformation";
import Desktop from "../../Components/3.Substances/Desktop/Desktop";
import WidgetDialog, {
	WidgetDialog_TSpeech,
} from "../../Components/3.Substances/Widget/WidgetDialog/WidgetDialog";
import { LanguageInterface } from "../../Logic/Modules/Language/Language.interface";
import Text from "../../Components/0.Cores/Text/Text";

const tempDialog: WidgetDialog_TSpeech[] = [
	{
		id: 0,
		dialogLine: <Text text={LanguageInterface.ELanguageSimpleWord.EXIT} />,
		callback: () => alert(),
	},
	{
		id: 1,
		dialogLine: <Text text={LanguageInterface.ELanguageSimpleWord.EXIT} />,
		callback: () => alert(),
	},
	{
		id: 2,
		dialogLine: <Text text={LanguageInterface.ELanguageSimpleWord.EXIT} />,
		callback: () => alert(),
	},
	{
		id: 3,
		dialogLine: <Text text={LanguageInterface.ELanguageSimpleWord.EXIT} />,
		callback: () => alert(),
	},
	{
		id: 4,
		dialogLine: <Text text={LanguageInterface.ELanguageSimpleWord.EXIT} />,
		callback: () => alert(),
	},
	{
		id: 5,
		dialogLine: <Text text={LanguageInterface.ELanguageSimpleWord.EXIT} />,
		callback: () => alert(),
	},
	{
		id: 6,
		dialogLine: <Text text={LanguageInterface.ELanguageSimpleWord.EXIT} />,
		callback: () => alert(),
	},
	{
		id: 7,
		dialogLine: <Text text={LanguageInterface.ELanguageSimpleWord.EXIT} />,
		callback: () => alert(),
	},
	{
		id: 8,
		dialogLine: <Text text={LanguageInterface.ELanguageSimpleWord.EXIT} />,
		callback: () => alert(),
	},
	{
		id: 9,
		dialogLine: <Text text={LanguageInterface.ELanguageSimpleWord.EXIT} />,
		callback: () => alert(),
	},
	{
		id: 10,
		dialogLine: <Text text={LanguageInterface.ELanguageSimpleWord.EXIT} />,
		callback: () => alert(),
	},
	{
		id: 11,
		dialogLine: <Text text={LanguageInterface.ELanguageSimpleWord.EXIT} />,
		callback: () => alert(),
	},
];

const GamePage = () => {
	return (
		<div css={styles.wrapper}>
			<div css={styles.top}>
				<div css={styles.leftPart}>
					<WidgetCalendar />
					<WidgetInformation extStyle={styles.stretching} />
				</div>
				<Desktop extStyle={styles.stretching} image={""} />
			</div>
			<WidgetDialog extStyle={styles.dialog} speech={tempDialog} />
		</div>
	);
};

export default GamePage;
