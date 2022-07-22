import styles from "./ThemeSwitcher.styles";
import { observer } from "mobx-react";
import { useEffect } from "react";

//Если я накину тему на div, то при увеличении и уменьшении окна браузера будут белые просветы как это сейчас на сайте фигмы
const body = document.getElementsByTagName("body")[0];
body.style.background = styles.background();

export const ThemeSwitcher = observer(() => {
	useEffect(() => {
		body.style.transition = styles.transition();
	}, []);
	body.style.background = styles.background();
	return null;
});
