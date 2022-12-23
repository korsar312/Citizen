import React, { FC, memo } from "react";
import ContentWrapper from "../../0.Cores/ContentWrapper/ContentWrapper";
import styles from "./Desktop.styles";
import { ComponentsInterface } from "../../Components.interface";
import Text from "../../0.Cores/Text/Text";
import { LocationsInterface } from "../../../Logic/GameSrc/GameResources/Locations/Locations.interface";
import SystemController from "../../../Logic/Modules/SystemController/SystemController";
import { LanguageInterface } from "../../../Logic/Modules/Language/Language.interface";

interface IDesktop {
	image: any;
	speakerText: LocationsInterface.EWordSpeaker;
	extStyle?: ComponentsInterface.TDeepCSSObject;
}

const Desktop: FC<IDesktop> = (props) => {
	const { image, speakerText, extStyle } = props;

	return (
		<ContentWrapper extStyle={[styles.wrapper, extStyle]}>
			<div css={styles.image}>
				<img src={image} alt={SystemController("language", "service", "getText", LanguageInterface.ELanguageSimpleWord.TEMP_WORD_REMOVE_THIS)} />
			</div>

			<ContentWrapper extStyle={styles.speaker} color={{ color: "NEUTRAL", shard: "NEUTRAL_8" }}>
				<Text text={speakerText} />
			</ContentWrapper>
		</ContentWrapper>
	);
};

export default memo(Desktop);
