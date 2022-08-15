import React, { FC, ReactNode } from "react";
import styles from "./WidgetWrappers.styles";
import { variablesColorsInterface } from "../../../../Styles/Variables/VariablesColors/VariablesColors.interface";
import ContentWrapper from "../../../0.Cores/ContentWrapper/ContentWrapper";
import { observer } from "mobx-react";
import { ComponentsInterface } from "../../../Components.interface";

interface IContentWrapper {
	children: ReactNode;
	color?: variablesColorsInterface.TColorChoice;
	extStyle?: ComponentsInterface.TDeepCSSObject;
}

const WidgetWrappers: FC<IContentWrapper> = (props) => {
	const { children, color = { color: "NEUTRAL", shard: "NEUTRAL_9" }, extStyle } = props;

	return <ContentWrapper extStyle={[styles.wrapper, styles.color(color)]}>{children}</ContentWrapper>;
};

export default observer(WidgetWrappers);
