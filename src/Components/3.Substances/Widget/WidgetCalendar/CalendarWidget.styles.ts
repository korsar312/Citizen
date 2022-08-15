import { Styles } from "../../../../Styles/Styles";
import { CSSObject } from "@emotion/react";

class CalendarWidgetStyles extends Styles {
	public wrapper: CSSObject = {
		display: "flex",
		justifyContent: "space-between",
	};

	public day: CSSObject = {
		width: 40,
	};
}

export default new CalendarWidgetStyles();
