import { LocationsInterface, LocationsInterface as ILoc } from "../Locations.interface";
import downtown from "./Images/downtown.jpg";
import eastWall from "./Images/eastWall.jpg";
import northernWall from "./Images/northernWall.png";
import outskirts from "./Images/outskirts.jpg";
import shopping_district from "./Images/shopping_district.jpg";
import temple from "./Images/temple.jpg";
import { FarundInterface } from "./Farund.interface";

export class FarundDialog implements FarundInterface.IFarundDialog {
	START(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = outskirts;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FARUND_START;
		const dialog = [
			{
				dialogLine: ILoc.EWordDialog.GO_MAIN_TEMPLE,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.TEMPLE,
				},
			},
		];

		return {
			image: image,
			speaker: speaker,
			dialog: dialog,
		};
	}

	OUTSKIRTS(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = outskirts;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FARUND_ENTER_OUTSKIRTS;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.GO_MAIN_TEMPLE,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.TEMPLE,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_DOWNTOWN,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.DOWNTOWN,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_SHOPPING_DISTRICT,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.SHOPPING_DISTRICT,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_EAST_WALL_CITY,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.EASTWALL,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_NORTHERN_WALL_CITY,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.NORTHERNWALL,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.LOOK_AROUND,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.EASTWALL,
					options: { speaker: ILoc.EWordSpeaker.FARUND_OUTSKIRTS_DESCRIPTION },
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	TEMPLE(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = temple;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FARUND_ENTER_TEMPLE;
		const dialog = [
			{
				dialogLine: ILoc.EWordDialog.GO_OUTSKIRTS,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.OUTSKIRTS,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_DOWNTOWN,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.DOWNTOWN,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_SHOPPING_DISTRICT,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.SHOPPING_DISTRICT,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_EAST_WALL_CITY,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.EASTWALL,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_NORTHERN_WALL_CITY,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.NORTHERNWALL,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.LOOK_AROUND,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.TEMPLE,
					options: { speaker: ILoc.EWordSpeaker.FARUND_TEMPLE_DESCRIPTION_CITY },
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	DOWNTOWN(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = downtown;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FARUND_ENTER_DOWNTOWN;
		const dialog = [
			{
				dialogLine: ILoc.EWordDialog.GO_OUTSKIRTS,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.OUTSKIRTS,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_MAIN_TEMPLE,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.TEMPLE,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_SHOPPING_DISTRICT,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.SHOPPING_DISTRICT,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_EAST_WALL_CITY,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.EASTWALL,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_NORTHERN_WALL_CITY,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.NORTHERNWALL,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	SHOPPING_DISTRICT(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = shopping_district;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FARUND_ENTER_SHOPPING_DISTRICT;
		const dialog = [
			{
				dialogLine: ILoc.EWordDialog.GO_OUTSKIRTS,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.OUTSKIRTS,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_MAIN_TEMPLE,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.TEMPLE,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_DOWNTOWN,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.DOWNTOWN,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_EAST_WALL_CITY,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.EASTWALL,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_NORTHERN_WALL_CITY,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.NORTHERNWALL,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	EASTWALL(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = eastWall;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FARUND_ENTER_EAST_WALL;
		const dialog = [
			{
				dialogLine: ILoc.EWordDialog.GO_OUTSKIRTS,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.OUTSKIRTS,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_MAIN_TEMPLE,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.TEMPLE,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_DOWNTOWN,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.DOWNTOWN,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_SHOPPING_DISTRICT,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.SHOPPING_DISTRICT,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_NORTHERN_WALL_CITY,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.NORTHERNWALL,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	NORTHERNWALL(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = northernWall;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FARUND_ENTER_NORTHERN_WALL;
		const dialog = [
			{
				dialogLine: ILoc.EWordDialog.GO_OUTSKIRTS,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.OUTSKIRTS,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_MAIN_TEMPLE,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.TEMPLE,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_DOWNTOWN,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.DOWNTOWN,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_SHOPPING_DISTRICT,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.SHOPPING_DISTRICT,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GO_EAST_WALL_CITY,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.EASTWALL,
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
