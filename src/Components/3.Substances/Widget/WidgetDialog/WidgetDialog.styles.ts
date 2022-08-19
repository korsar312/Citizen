import { Styles } from "../../../../Styles/Styles";
import { CSSObject } from "@emotion/react";

class WidgetDialogStyles extends Styles {
	public wrapper: CSSObject = {
		paddingLeft: 0,
		paddingRight: 0,
		padding: 0,
	};

	public line: CSSObject = {
		display: "flex",
		width: "100%",
		padding: "5px 10px",
	};
}

export default new WidgetDialogStyles();
