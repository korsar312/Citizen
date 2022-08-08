import React, { FC } from "react";
import styles from "./Calendar.styles";
import ContentWrapper from "../../1.Atoms/ContentWrapper/ContentWrapper";
import game from "../../../Game/Game";
import Day from "../../2.Molecules/Day/Day";

const Calendar: FC = () => {
	const currentDay = game.times.store.getNameCurrentDay();
	const week = game.times.store.getDays();

	return (
		<ContentWrapper>
			<div css={styles.wrapper}>
				{Object.entries(week).map((day) => (
					<Day key={day[0]} date={{ numberDay: 2, weekDay: day[1] }} />
				))}
			</div>
		</ContentWrapper>
	);
};

export default Calendar;
