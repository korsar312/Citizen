import { CSSObject } from "@emotion/react";
import { Styles } from "../../../Styles/Styles";

class DesktopStyles extends Styles {
	public wrapper: CSSObject = {
		display: "flex",
		flexDirection: "column",
		position: "relative",
		borderRadius: this.variablesProportions.radius,
		overflow: "hidden",
	};

	public image: CSSObject = {
		flex: 1,
		overflow: "hidden",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 150,
		"& img": {
			height: "100%",
			width: "100%",
			objectFit: "cover",
		},
	};

	public speaker: CSSObject = {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 150,
		padding: 10,
		borderTop: `2px solid ${this.variablesColors.getColor({ color: "BLUE", shard: "LIGHT" })}`,
	};
}

export default new DesktopStyles();
