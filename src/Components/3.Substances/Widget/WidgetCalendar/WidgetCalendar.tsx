import React, { FC, memo } from "react";
import styles from "./WidgetCalendar.styles";
import Day from "../../../2.Molecules/Day/Day";
import WidgetWrappers from "../../../1.Atoms/Wrappers/WrappersWidget/WrappersWidget";
import { ComponentsInterface } from "../../../Components.interface";
import gameResources from "../../../../Logic/GameSrc/GameResources/GameResources";

interface IWidgetCalendar {
	extStyle?: ComponentsInterface.TDeepCSSObject;
}

const WidgetCalendar: FC<IWidgetCalendar> = (props) => {
	const { extStyle } = props;

	const week = gameResources.domains.times.store.getDays();

	return (
		<WidgetWrappers extStyle={extStyle}>
			<div css={styles.wrapper}>
				{Object.entries(week).map((day) => {
					const isCurrentDay = gameResources.domains.times.store.getCurrentDate().day === +day[0];

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

export default memo(WidgetCalendar);