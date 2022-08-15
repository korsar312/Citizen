import { LanguageInterface } from "../Logic/Modules/Language/Language.interface";
import { typesUtils } from "../Logic/Libs/Utils/TypesUtils";
import { CSSObject } from "@emotion/react";
import React, { FC } from "react";

export namespace ComponentsInterface {
	export type TIconAndTitle = {
		icon: FC<React.SVGProps<SVGSVGElement>>;
		title?: LanguageInterface.TAllLanguageWord;
	};

	export type TDeepCSSObject = typesUtils.RecursiveArray<CSSObject | undefined> | CSSObject;
}
