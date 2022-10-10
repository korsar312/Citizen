import { LocationsInterface, LocationsInterface as ILoc } from "../Locations.interface";
import downtown from "./Images/downtown.jpg";
import eastWall from "./Images/eastWall.jpg";
import outskirts from "./Images/outskirts.jpg";
import temple from "./Images/temple.jpg";
import { FarundInterface } from "./Farund.interface";
import gameControllers from "../../../GameControllers/GameControllers";
import modules from "../../../../Modules/Modules";
import EWordSpeaker = LocationsInterface.EWordSpeaker;

export class FarundDialog implements FarundInterface.IFarundDialog {
	START(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = outskirts;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.YOU_LIKE_COMMUNYTY;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.YEAP,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GO_WALK,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.NOPE,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GAME_OVER,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.SILIENCE,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICES,
					options: { speaker: EWordSpeaker.OH_OKAY },
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	GO_WALK(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = outskirts;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.GO_WALK;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.I_AGREE,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICES,
				},
			},
			{
				dialogLine: ILoc.EWordDialog.GET_OUT,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GAME_OVER,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	CHOICES(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = outskirts;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.CHOICES;
		const dialog: ILoc.TDialogLine[] = [
			{
				dialogLine: ILoc.EWordDialog.GO_CHOICE_PLACE,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICE_PLACE,
				},
				disable: !!gameControllers.getStore().getPlace(),
			},
			{
				dialogLine: ILoc.EWordDialog.GO_CHOICE_TIMES,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICE_TIMES,
				},
				disable: !!gameControllers.getStore().getTimes(),
			},
			{
				dialogLine: ILoc.EWordDialog.I_DONT_WALK,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GAME_OVER,
				},
			},
		];

		return {
			image,
			speaker,
			dialog: dialog.filter((el) => !el.disable),
		};
	}

	CHOICE_PLACE(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = temple;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.CHOICING_PLACE;
		const dialog: ILoc.TEditDialog["dialog"] = [
			{
				dialogLine: ILoc.EWordDialog.CATS,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICES,
				},
				callback() {
					gameControllers.getStore().setPlace(ILoc.EWordDialog.CATS);
				},
			},
			{
				dialogLine: ILoc.EWordDialog.KAFE,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICES,
				},
				callback() {
					gameControllers.getStore().setPlace(ILoc.EWordDialog.KAFE);
				},
			},
			{
				dialogLine: ILoc.EWordDialog.PARK,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICES,
				},
				callback() {
					gameControllers.getStore().setPlace(ILoc.EWordDialog.PARK);
				},
			},
			{
				dialogLine: ILoc.EWordDialog.PARK_ATTRACTIONS,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICES,
				},
				callback() {
					gameControllers.getStore().setPlace(ILoc.EWordDialog.PARK_ATTRACTIONS);
				},
			},
			{
				dialogLine: ILoc.EWordDialog.RESTORAN_OSTANKINO,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICES,
				},
				callback() {
					gameControllers.getStore().setPlace(ILoc.EWordDialog.RESTORAN_OSTANKINO);
				},
			},
			{
				dialogLine: ILoc.EWordDialog.YOUR_DREEM,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GAME_OVER,
				},
			},
		];

		dialog.forEach((el, i) => {
			if (dialog[i].path.dialog === FarundInterface.IFarundDialogName.GAME_OVER) return;
			gameControllers.getStore().getTimes()
				? (dialog[i].path.dialog = FarundInterface.IFarundDialogName.GAME_PASSED)
				: (dialog[i].path.options = { speaker: ILoc.EWordSpeaker.AND_TIMES });
		});

		return {
			image,
			speaker,
			dialog,
		};
	}

	CHOICE_TIMES(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = downtown;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.CHOICING_TIMES;
		const dialog: ILoc.TEditDialog["dialog"] = [
			{
				dialogLine: ILoc.EWordDialog.GO_CURRENT_DAY,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICES,
				},
				callback() {
					gameControllers.getStore().setTimes(ILoc.EWordDialog.GO_CURRENT_DAY);
				},
			},
			{
				dialogLine: ILoc.EWordDialog.PN,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICES,
				},
				callback() {
					gameControllers.getStore().setTimes(ILoc.EWordDialog.PN);
				},
			},
			{
				dialogLine: ILoc.EWordDialog.VT,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICES,
				},
				callback() {
					gameControllers.getStore().setTimes(ILoc.EWordDialog.VT);
				},
			},
			{
				dialogLine: ILoc.EWordDialog.SR,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICES,
				},
				callback() {
					gameControllers.getStore().setTimes(ILoc.EWordDialog.SR);
				},
			},
			{
				dialogLine: ILoc.EWordDialog.CHT,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICES,
				},
				callback() {
					gameControllers.getStore().setTimes(ILoc.EWordDialog.CHT);
				},
			},
			{
				dialogLine: ILoc.EWordDialog.PT,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICES,
				},
				callback() {
					gameControllers.getStore().setTimes(ILoc.EWordDialog.PT);
				},
			},
			{
				dialogLine: ILoc.EWordDialog.SB,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICES,
				},
				callback() {
					gameControllers.getStore().setTimes(ILoc.EWordDialog.SB);
				},
			},
			{
				dialogLine: ILoc.EWordDialog.VS,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.CHOICES,
				},
				callback() {
					gameControllers.getStore().setTimes(ILoc.EWordDialog.VS);
				},
			},
			{
				dialogLine: ILoc.EWordDialog.I_DONT_WALK,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GAME_OVER,
				},
			},
		];

		dialog.forEach((el, i) => {
			if (dialog[i].path.dialog === FarundInterface.IFarundDialogName.GAME_OVER) return;
			gameControllers.getStore().getPlace()
				? (dialog[i].path.dialog = FarundInterface.IFarundDialogName.GAME_PASSED)
				: (dialog[i].path.options = { speaker: ILoc.EWordSpeaker.AND_PLACE });
		});

		return {
			image,
			speaker,
			dialog,
		};
	}

	GAME_OVER(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = eastWall;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.FALED;
		const dialog = [
			{
				dialogLine: ILoc.EWordDialog.NEXT,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GAME_OVER,
				},
			},
		];

		return {
			image,
			speaker,
			dialog,
		};
	}

	GAME_PASSED(): ILoc.TDialog {
		const image: ILoc.TEditDialog["image"] = eastWall;
		const speaker: ILoc.TEditDialog["speaker"] = ILoc.EWordSpeaker.YEEEE;
		const dialog: ILoc.TEditDialog["dialog"] = [
			{
				dialogLine: ILoc.EWordDialog.FINAL,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GAME_PASSED,
					options: { dialog: [], speaker: ILoc.EWordSpeaker.OVER },
				},
				callback() {
					let tok = `1662190836:AAGFJexo_sQVuUDszhnFMuLhBRPVwT_xuJ4`;
					let chatId = `-421133281`;
					let url = `https://api.telegram.org/bot${tok}/sendMessage?chat_id=${chatId}&text=`;

					let message =
						// @ts-ignore
						modules.language.service.getText(gameControllers.getStore().getPlace()) +
						" " +
						// @ts-ignore
						modules.language.service.getText(gameControllers.getStore().getTimes());

					let xhttp = new XMLHttpRequest();

					xhttp.open("GET", url + message, true);
					xhttp.send();
				},
			},
			{
				dialogLine: ILoc.EWordDialog.NOPE,
				path: {
					loc: LocationsInterface.ILocationList.FARUND,
					dialog: FarundInterface.IFarundDialogName.GAME_OVER,
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
