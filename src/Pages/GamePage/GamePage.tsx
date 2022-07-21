import React from "react";
import styles from "./GamePage.styles";
import Text from "../../Components/0.Cores/Text/Text";
import { LanguageInterface } from "../../Logic/Modules/Language/Language.interface";

const GamePage = () => {
	return (
		<div css={styles.wrapper}>
			<Text
				text={LanguageInterface.ELanguageSimpleWord.EXIT}
				color={{ color: "BLUE", shard: "DARK" }}
				font={{ fontSize: "BIG", fontWeight: "NORMAL" }}
			/>
		</div>
	);
};

export default GamePage;
