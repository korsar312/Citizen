import React, { FC, memo } from "react";
import WrappersWidget from "../../../1.Atoms/Wrappers/WrappersWidget/WrappersWidget";
import { ComponentsInterface } from "../../../Components.interface";

interface IWidgetInformation {
	extStyle?: ComponentsInterface.TDeepCSSObject;
}

const WidgetInformation: FC<IWidgetInformation> = (props) => {
	const { extStyle } = props;

	return <WrappersWidget extStyle={extStyle}>{""}</WrappersWidget>;
};

export default memo(WidgetInformation);
