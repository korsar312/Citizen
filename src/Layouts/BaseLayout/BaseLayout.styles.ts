import { CSSObject } from "@emotion/react";
import { Styles } from "../../Styles/Styles";

class BaseLayoutStyles extends Styles {
	public wrapper: CSSObject = {
		padding: 20,
	};
}

export default new BaseLayoutStyles();
