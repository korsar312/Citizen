import React, { FC } from "react";
import styles from "./Day.styles";
import Text from "../../0.Cores/Text/Text";
import { TimesInterface } from "../../../Game/Domains/Times/Times.interface";

interface IDay {
	date: IDay_TDay;
}

export type IDay_TDay = {
	weekDay: TimesInterface.EDayOfTheWeekWord;
	numberDay: number;
	icon?: SVGElement;
};

const Day: FC<IDay> = (props) => {
	const { date } = props;

	return (
		<div css={styles.wrapper}>
			<div>
				<Text text={date.weekDay} font={{ fontSize: "SMALL", fontWeight: "NORMAL" }} />
			</div>
			<div>
				<Text text={date.numberDay} font={{ fontSize: "BODY", fontWeight: "NORMAL" }} />
			</div>
			<div>{date.icon && <Text text={"*"} font={{ fontSize: "SMALL", fontWeight: "NORMAL" }} />}</div>
		</div>
	);
};

export default Day;
