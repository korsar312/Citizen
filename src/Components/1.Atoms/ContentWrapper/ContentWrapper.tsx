import React, { FC } from "react";
import styles from "./ContentWrapper.styles";
import { variablesColorsInterface } from "../../../Styles/Variables/VariablesColors/VariablesColors.interface";
import { observer } from "mobx-react";

interface IContentWrapper {
	color?: variablesColorsInterface.TColorChoice;
}

const ContentWrapper: FC<IContentWrapper> = (props) => {
	const { color = { color: "NEUTRAL", shard: "NEUTRAL_8" } } = props;

	return <div css={[styles.wrapper, styles.color(color)]}>213</div>;
};

export default observer(ContentWrapper);
