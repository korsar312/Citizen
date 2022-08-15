import { Styles } from "../../Styles/Styles";

class GamePageStyles extends Styles {
	private gap = 20;

	public wrapper = {};
	public leftPart = {
		width: 400,
		gap: this.gap,
	};
	public top = {
		gap: this.gap,
		display: "flex",
	};
}

export default new GamePageStyles();
