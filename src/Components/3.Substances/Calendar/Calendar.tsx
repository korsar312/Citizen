import React, { FC, useEffect } from "react";
import styles from "./Calendar.styles";
import ContentWrapper from "../../1.Atoms/ContentWrapper/ContentWrapper";
import game from "../../../Game/Game";

const Calendar: FC = () => {
	const currentDay = game.times.getNameCurrentDay();

	const week = game.times.getWeek();

	console.log(week);

	return (
		<ContentWrapper>
			<div css={styles.wrapper}>
				{/*<Day date={{ numberDay: 21, weekDay: LanguageInterface.ELanguageDayOfTheWeekWord.ESD }} />*/}
			</div>
		</ContentWrapper>
	);
};

export default Calendar;
