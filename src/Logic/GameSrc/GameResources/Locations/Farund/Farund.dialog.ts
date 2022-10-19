import { LocationsInterface, LocationsInterface as ILoc } from "../Locations.interface";
import koridor from "./Images/Dark_korid.jpg";
import doore from "./Images/doore.jpg";
import sel from "./Images/sel.jpg";
import drink from "./Images/drink.jpeg";
import surp from "./Images/surp.jpg";
import switcher from "./Images/switcher.jpg";
import kitchen from "./Images/kitchen.jpg";

import { FarundInterface } from "./Farund.interface";
import gameControllers from "../../../GameControllers/GameControllers";

export class FarundDialog implements FarundInterface.IFarundDialog {
	START(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = koridor;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.START_S;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.GO_NEXT,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GO_NEXT,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.LIGHT_ON,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.LIGHT_ON,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	LIGHT_ON(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = switcher;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.LIGHT_ERROR;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.GO_NEXT,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GO_NEXT,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	GO_NEXT(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = koridor;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.KORIDOR;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.GO_KITCHEN,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.IN_KITCHEN,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_ROOM,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.IN_ROOM,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	IN_KITCHEN(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = kitchen;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.KITCHEN;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.DRINK,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.DRINK,
				},
				disable: !!gameControllers.getStore().getTimes(),
				callback() {
					gameControllers.getStore().setTimes("1");
				},
			},
			{
				dialogLine: ILoc.EWordDialog.LISTEN,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.LISTEN,
				},
				disable: !!gameControllers.getStore().getPlace(),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_NEXT,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GO_NEXT,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	DRINK(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = drink;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.DRINK_S;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.LISTEN,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.LISTEN,
				},
				disable: !!gameControllers.getStore().getPlace(),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_NEXT,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GO_NEXT,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	LISTEN(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = kitchen;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.LISTENER;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.BACK,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.IN_KITCHEN,
				},
				callback() {
					gameControllers.getStore().setPlace("1");
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	IN_ROOM(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = doore;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.ROOM;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: !gameControllers.getStore().getPlace() ? ILoc.EWordDialog.GO_AT_ONCE : ILoc.EWordDialog.GO_SILIENCE,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GO_AT_ONCE,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_AND_SAY,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GO_AND_SAY,
				},
				disable: !gameControllers.getStore().getPlace(),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_NEXT,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GO_NEXT,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	GO_AT_ONCE(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = surp;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.SURPRIS;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.SURPRISED,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.VANDERFUL,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	GO_AND_SAY(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = surp;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.GO_AND_SAY_S;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.SMILE,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.SMILES,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	VANDERFUL(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = surp;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.VANDERFUL;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.GO_DAY_SELEBRITY,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.DAY_SELEBRITY,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	SMILES(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = surp;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.SMILES;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.GO_DAY_SELEBRITY,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.DAY_SELEBRITY,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	DAY_SELEBRITY(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = sel;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.POZDRAVLENIA;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.FINAL,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.FINAL,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	FINAL(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = sel;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FINAL_S;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.THE_END,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.FINAL,
					options: { dialog: [] },
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}
}
