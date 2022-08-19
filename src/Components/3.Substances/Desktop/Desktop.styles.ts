import { CSSObject } from "@emotion/react";
import { Styles } from "../../../Styles/Styles";

class DesktopStyles extends Styles {
	public wrapper: CSSObject = {
		borderRadius: this.variablesProportions.radius,
	};
}

export default new DesktopStyles();
