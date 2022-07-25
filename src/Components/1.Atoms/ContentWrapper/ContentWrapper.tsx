import React, { FC, ReactNode } from "react";
import styles from "./ContentWrapper.styles";
import { variablesColorsInterface } from "../../../Styles/Variables/VariablesColors/VariablesColors.interface";
import { observer } from "mobx-react";

interface IContentWrapper {
	children: ReactNode;
	color?: variablesColorsInterface.TColorChoice;
}

const ContentWrapper: FC<IContentWrapper> = (props) => {
	const { children, color = { color: "NEUTRAL", shard: "NEUTRAL_9" } } = props;

	return <div css={[styles.wrapper, styles.color(color)]}>{children}</div>;
};

export default observer(ContentWrapper);
