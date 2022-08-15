import React from "react";
import styles from "./GamePage.styles";
import CalendarWidget from "../../Components/3.Substances/Widget/WidgetCalendar/CalendarWidget";

const GamePage = () => {
	return (
		<div css={styles.wrapper}>
			<div css={styles.top}>
				<div css={styles.leftPart}>
					<CalendarWidget />
					<div style={{ background: "#3d3d3d" }}>123</div>
				</div>
				<div style={{ background: "#3d3d3d", flex: 1 }}>123</div>
			</div>
			<div style={{ background: "#3d3d3d" }}>123</div>
		</div>
	);
};

export default GamePage;
