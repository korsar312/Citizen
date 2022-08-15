import React, { FC } from "react";
import styles from "./CalendarWidget.styles";
import game from "../../../../Logic/GameSrc/Game/Domains/Domains";
import Day from "../../../2.Molecules/Day/Day";
import WidgetWrappers from "../../../1.Atoms/Wrappers/WidgetWrappers/WidgetWrappers";

const CalendarWidget: FC = () => {
	const week = game.times.store.getDays();

	return (
		<WidgetWrappers>
			<div css={styles.wrapper}>
				{Object.entries(week).map((day) => {
					const isCurrentDay = game.times.store.getCurrentDate().day === +day[0];

					return (
						<Day
							color={isCurrentDay ? { color: "BLUE", shard: "NORMAL" } : undefined}
							extStyle={styles.day}
							key={day[0]}
							date={{
								numberDay: day[0],
								weekDay: day[1],
							}}
						/>
					);
				})}
			</div>
		</WidgetWrappers>
	);
};

export default CalendarWidget;
