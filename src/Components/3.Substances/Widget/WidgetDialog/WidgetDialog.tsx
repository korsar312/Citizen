import React, { FC } from "react";
import WidgetWrappers from "../../../1.Atoms/Wrappers/WrappersWidget/WrappersWidget";
import { ComponentsInterface } from "../../../Components.interface";
import Text from "../../../0.Cores/Text/Text";
import Button from "../../../1.Atoms/Button/Button";
import styles from "./WidgetDialog.styles";
import { LocationsInterface } from "../../../../Logic/GameSrc/GameResources/Locations/Locations.interface";

interface IWidgetDialog {
	speech: LocationsInterface.TDialogLine[];
	setLocate: (heroLocate: LocationsInterface.TDialogLine) => void;
	extStyle?: ComponentsInterface.TDeepCSSObject;
}

const WidgetDialog: FC<IWidgetDialog> = (props) => {
	const { speech, setLocate, extStyle } = props;

	return (
		<WidgetWrappers extStyle={[styles.wrapper, extStyle]}>
			{speech.map((el, index) => {
				if (el.disable) return;
				return (
					<Button key={el.dialogLine} onClick={() => setLocate(el)} extStyle={styles.line} hoverColor={{ color: "BLUE", shard: "DARK" }}>
						<Text text={`${index + 1}.⠀`} />
						<Text text={el.dialogLine} />
					</Button>
				);
			})}
		</WidgetWrappers>
	);
};

export default WidgetDialog;
