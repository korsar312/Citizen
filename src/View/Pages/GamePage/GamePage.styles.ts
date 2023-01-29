import { Styles } from "../../../Styles/Styles";
import { CSSObject } from "@emotion/react";

class GamePageStyles extends Styles {
	private gap = 20;

	public wrapper: CSSObject = {
		display: "flex",
		flexDirection: "column",
		gap: this.gap,
		height: "100%",
	};

	public top: CSSObject = {
		display: "flex",
		gap: this.gap,
		height: "100%",
	};

	public leftPart: CSSObject = {
		display: "flex",
		flexDirection: "column",
		gap: this.gap,
		width: 340,
	};

	public stretching: CSSObject = {
		flex: 1,
	};

	public dialog: CSSObject = {
		height: 300,
	};
}

export default new GamePageStyles();
