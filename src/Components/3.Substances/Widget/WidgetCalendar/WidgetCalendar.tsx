import React, { FC } from "react";
import styles from "./WidgetCalendar.styles";
import game from "../../../../Logic/GameSrc/Game/Domains/Domains";
import Day from "../../../2.Molecules/Day/Day";
import WidgetWrappers from "../../../1.Atoms/Wrappers/WrappersWidget/WrappersWidget";
import { ComponentsInterface } from "../../../Components.interface";

interface IWidgetCalendar {
	extStyle?: ComponentsInterface.TDeepCSSObject;
}

const WidgetCalendar: FC<IWidgetCalendar> = (props) => {
	const { extStyle } = props;

	const week = game.times.store.getDays();

	return (
		<WidgetWrappers extStyle={extStyle}>
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

export default WidgetCalendar;
