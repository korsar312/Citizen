import React, { FC } from "react";
import styles from "./Day.styles";
import Text from "../../0.Cores/Text/Text";
import { LanguageInterface } from "../../../Logic/Modules/Language/Language.interface";

interface IDay {
	date: IDay_TDay;
}

export type IDay_TDay = {
	weekDay: LanguageInterface.ELanguageDayOfTheWeekWord;
	numberDay: number;
	icon?: SVGElement;
};

const Day: FC<IDay> = (props) => {
	const {} = props;

	return (
		<div css={styles.wrapper}>
			<div>
				<Text text={"THU"} font={{ fontSize: "SMALL", fontWeight: "NORMAL" }} />
			</div>
			<div>
				<Text text={"23"} font={{ fontSize: "BODY", fontWeight: "NORMAL" }} />
			</div>
			<div>
				<Text text={"*"} font={{ fontSize: "SMALL", fontWeight: "NORMAL" }} />
			</div>
		</div>
	);
};

export default Day;
