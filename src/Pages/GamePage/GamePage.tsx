import React from "react";
import styles from "./GamePage.styles";
import Calendar from "../../Components/3.Substances/Calendar/Calendar";

const GamePage = () => {
	return (
		<div css={styles.wrapper}>
			<Calendar />
		</div>
	);
};

export default GamePage;
