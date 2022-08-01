import { Styles } from "../../../Styles/Styles";
import { CSSObject } from "@emotion/react";

class DayStyles extends Styles {
	public wrapper: CSSObject = {
		background: this.variablesColors.getColor({ color: "BLUE", shard: "NORMAL" }),
		borderRadius: this.variablesProportions.radius,
	};
}

export default new DayStyles();
