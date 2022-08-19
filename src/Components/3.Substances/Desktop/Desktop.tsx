import React, { FC } from "react";
import ContentWrapper from "../../0.Cores/ContentWrapper/ContentWrapper";
import styles from "./Desktop.styles";
import { ComponentsInterface } from "../../Components.interface";

interface IDesktop {
	image: any;
	extStyle?: ComponentsInterface.TDeepCSSObject;
}

const Desktop: FC<IDesktop> = (props) => {
	const { image, extStyle } = props;

	return <ContentWrapper extStyle={[styles.wrapper, extStyle]}>{image}</ContentWrapper>;
};

export default Desktop;
