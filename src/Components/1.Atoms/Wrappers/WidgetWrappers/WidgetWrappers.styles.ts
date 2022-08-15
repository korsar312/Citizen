import { CSSObject } from "@emotion/react";
import { Styles } from "../../../../Styles/Styles";
import { variablesColorsInterface } from "../../../../Styles/Variables/VariablesColors/VariablesColors.interface";

class WidgetWrappersStyles extends Styles {
	private readonly border = 2;

	public wrapper: CSSObject = {
		padding: 17,
		borderRadius: this.variablesProportions.radius,
		margin: `${this.border}px`,
	};

	public color(colors: variablesColorsInterface.TColorChoice) {
		return {
			outline: `solid ${this.border}px ${this.variablesColors.getColor(colors, 0.5)}`,
		} as CSSObject;
	}
}

export default new WidgetWrappersStyles();
