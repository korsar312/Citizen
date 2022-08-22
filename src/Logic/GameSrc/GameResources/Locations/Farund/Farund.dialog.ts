import { LocationsInterface as ILoc } from "../Locations.interface";
import downtown from "./Images/downtown.jpg";
import eastWall from "./Images/eastWall.jpg";
import northernWall from "./Images/northernWall.png";
import outskirts from "./Images/outskirts.jpg";
import shopping_district from "./Images/shopping_district.jpg";
import temple from "./Images/temple.jpg";

export class FarundDialog implements ILoc.ILocation {
	start(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = "";
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FARUND_START;
		const dialog = [
			{
				dialogLine: ILoc.EWordDialog.GO_MAIN_TEMPLE,
				callback: this.temple.bind(this),
			},
		];

		return {
			image: image,
			speaker: speaker,
			dialog: dialog,
		};
	}

	outskirts(config?: ILoc.TEditDialog): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = outskirts;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FARUND_ENTER_OUTSKIRTS;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.GO_MAIN_TEMPLE,
				callback: this.temple.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_DOWNTOWN,
				callback: this.downtown.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_SHOPPING_DISTRICT,
				callback: this.shopping_district.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_EAST_WALL_CITY,
				callback: this.eastWall.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_NORTHERN_WALL_CITY,
				callback: this.northernWall.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.LOOK_AROUND,
				callback: this.outskirts.bind(this, { speaker: ILoc.EWordSpeaker.FARUND_OUTSKIRTS_DESCRIPTION }),
			},
		];

		return {
			image: config?.image || image,
			speaker: config?.speaker || speaker,
			dialog: config?.dialog || dialog,
		};
	}

	temple(config?: ILoc.TEditDialog): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = temple;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FARUND_ENTER_TEMPLE;
		const dialog = [
			{
				dialogLine: ILoc.EWordDialog.GO_OUTSKIRTS,
				callback: this.outskirts.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_DOWNTOWN,
				callback: this.downtown.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_SHOPPING_DISTRICT,
				callback: this.shopping_district.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_EAST_WALL_CITY,
				callback: this.eastWall.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_NORTHERN_WALL_CITY,
				callback: this.northernWall.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.LOOK_AROUND,
				callback: this.temple.bind(this, { speaker: ILoc.EWordSpeaker.FARUND_TEMPLE_DESCRIPTION_CITY }),
			},
		];

		return {
			image: config?.image || image,
			speaker: config?.speaker || speaker,
			dialog: config?.dialog || dialog,
		};
	}

	downtown(config?: ILoc.TEditDialog): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = downtown;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FARUND_ENTER_DOWNTOWN;
		const dialog = [
			{
				dialogLine: ILoc.EWordDialog.GO_OUTSKIRTS,
				callback: this.outskirts.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_MAIN_TEMPLE,
				callback: this.temple.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_SHOPPING_DISTRICT,
				callback: this.shopping_district.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_EAST_WALL_CITY,
				callback: this.eastWall.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_NORTHERN_WALL_CITY,
				callback: this.northernWall.bind(this),
			},
		];

		return {
			image: config?.image || image,
			speaker: config?.speaker || speaker,
			dialog: config?.dialog || dialog,
		};
	}

	shopping_district(config?: ILoc.TEditDialog): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = shopping_district;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FARUND_ENTER_SHOPPING_DISTRICT;
		const dialog = [
			{
				dialogLine: ILoc.EWordDialog.GO_OUTSKIRTS,
				callback: this.outskirts.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_MAIN_TEMPLE,
				callback: this.temple.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_DOWNTOWN,
				callback: this.downtown.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_EAST_WALL_CITY,
				callback: this.eastWall.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_NORTHERN_WALL_CITY,
				callback: this.northernWall.bind(this),
			},
		];

		return {
			image: config?.image || image,
			speaker: config?.speaker || speaker,
			dialog: config?.dialog || dialog,
		};
	}

	eastWall(config?: ILoc.TEditDialog): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = eastWall;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FARUND_ENTER_EAST_WALL;
		const dialog = [
			{
				dialogLine: ILoc.EWordDialog.GO_OUTSKIRTS,
				callback: this.outskirts.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_MAIN_TEMPLE,
				callback: this.temple.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_DOWNTOWN,
				callback: this.downtown.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_SHOPPING_DISTRICT,
				callback: this.shopping_district.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_NORTHERN_WALL_CITY,
				callback: this.northernWall.bind(this),
			},
		];

		return {
			image: config?.image || image,
			speaker: config?.speaker || speaker,
			dialog: config?.dialog || dialog,
		};
	}

	northernWall(config?: ILoc.TEditDialog): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = northernWall;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FARUND_ENTER_NORTHERN_WALL;
		const dialog = [
			{
				dialogLine: ILoc.EWordDialog.GO_OUTSKIRTS,
				callback: this.outskirts.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_MAIN_TEMPLE,
				callback: this.temple.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_DOWNTOWN,
				callback: this.downtown.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_SHOPPING_DISTRICT,
				callback: this.shopping_district.bind(this),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_EAST_WALL_CITY,
				callback: this.eastWall.bind(this),
			},
		];

		return {
			image: config?.image || image,
			speaker: config?.speaker || speaker,
			dialog: config?.dialog || dialog,
		};
	}
}
