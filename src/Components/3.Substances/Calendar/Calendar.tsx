import React, { FC } from "react";
import styles from "./Calendar.styles";
import ContentWrapper from "../../1.Atoms/ContentWrapper/ContentWrapper";
import Day from "../../2.Molecules/Day/Day";
import { LanguageInterface } from "../../../Logic/Modules/Language/Language.interface";

interface ICalendar {}

const Calendar: FC<ICalendar> = (props) => {
	const {} = props;

	return (
		<ContentWrapper>
			<div css={styles.wrapper}>
				<Day date={{ numberDay: 21, weekDay: LanguageInterface.ELanguageDayOfTheWeekWord.ESD }} />
			</div>
		</ContentWrapper>
	);
};

export default Calendar;
