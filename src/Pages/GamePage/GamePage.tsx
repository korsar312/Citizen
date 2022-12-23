import React from "react";
import styles from "./GamePage.styles";
import WidgetCalendar from "../../Components/3.Substances/Widget/WidgetCalendar/WidgetCalendar";
import WidgetInformation from "../../Components/3.Substances/Widget/WidgetInformation/WidgetInformation";
import Desktop from "../../Components/3.Substances/Desktop/Desktop";
import WidgetDialog from "../../Components/3.Substances/Widget/WidgetDialog/WidgetDialog";
import gameControllers from "../../Logic/ControlGame/GameControllers";
import { observer } from "mobx-react";
import DragMouse from "../../Components/0.Cores/DragMouse/DragMouse";

/**
 * Страница игры
 */
const GamePage = () => {
	const heroLocate = gameControllers.getHeroLocation();
	const goNewLocate = gameControllers.goLocations.bind(gameControllers);

	return (
		<div css={styles.wrapper}>
			<div css={styles.top}>
				<div css={styles.leftPart}>
					<DragMouse>
						<div style={{ background: "red" }}>Тест Драг элемента</div>
					</DragMouse>
					<WidgetCalendar />
					<WidgetInformation extStyle={styles.stretching} />
				</div>
				<Desktop extStyle={styles.stretching} image={heroLocate.image} speakerText={heroLocate.speaker} />
			</div>
			<WidgetDialog extStyle={styles.dialog} speech={heroLocate.dialog} setLocate={goNewLocate} />
		</div>
	);
};

export default observer(GamePage);
