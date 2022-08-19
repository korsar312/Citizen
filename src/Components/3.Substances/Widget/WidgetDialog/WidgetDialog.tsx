import React, { FC } from "react";
import WidgetWrappers from "../../../1.Atoms/Wrappers/WrappersWidget/WrappersWidget";
import { ComponentsInterface } from "../../../Components.interface";
import Text from "../../../0.Cores/Text/Text";
import Button from "../../../1.Atoms/Button/Button";
import styles from "./WidgetDialog.styles";

interface IWidgetDialog {
	speech: WidgetDialog_TSpeech[];
	extStyle?: ComponentsInterface.TDeepCSSObject;
}

export type WidgetDialog_TSpeech = {
	id: number;
	dialogLine: JSX.Element;
	callback: () => void;
};

const WidgetDialog: FC<IWidgetDialog> = (props) => {
	const { speech, extStyle } = props;

	return (
		<WidgetWrappers extStyle={[styles.wrapper, extStyle]}>
			{speech.map((el, index) => (
				<Button
					key={el.id}
					onClick={el.callback}
					extStyle={styles.line}
					hoverColor={{ color: "BLUE", shard: "DARK" }}
				>
					<Text text={`${index + 1}.⠀`} />
					{el.dialogLine}
				</Button>
			))}
		</WidgetWrappers>
	);
};

export default WidgetDialog;
