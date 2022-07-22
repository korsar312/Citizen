import { Styles } from "../../../Styles/Styles";
import { CSSObject } from "@emotion/react";
import { variablesColorsInterface } from "../../../Styles/Variables/VariablesColors/VariablesColors.interface";

class ContentWrapperStyles extends Styles {
	public wrapper: CSSObject = {
		padding: 25,
		borderRadius: 30,
		transition: this.variablesProportions.transition,
	};

	public color(colors: variablesColorsInterface.TColorChoice) {
		return {
			background: this.variablesColors.getColor(colors),
		} as CSSObject;
	}
}

export default new ContentWrapperStyles();
