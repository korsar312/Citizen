import { Styles } from "../../../Styles/Styles";
import { CSSObject } from "@emotion/react";
import { variablesColorsInterface } from "../../../Styles/Variables/VariablesColors/VariablesColors.interface";

class ContentWrapperStyles extends Styles {
	private readonly border = 2;

	public wrapper: CSSObject = {
		padding: 25,
		borderRadius: 20,
		transition: this.variablesProportions.transition,
		margin: `${this.border}px`,
	};

	public color(colors: variablesColorsInterface.TColorChoice) {
		return {
			background: this.variablesColors.getColor(colors),
			outline: `solid ${this.border}px ${this.variablesColors.getColor(colors, 0.5)}`,
		} as CSSObject;
	}
}

export default new ContentWrapperStyles();
