import { FarundDialog } from "./Farund.dialog";
import { FarundStore } from "./Farund.store";
import { LocationsInterface } from "../Locations.interface";

export class FarundModule implements LocationsInterface.ILocationModule<FarundDialog, FarundStore> {
	public dialog: FarundDialog;
	public store: FarundStore;

	constructor() {
		this.dialog = new FarundDialog();
		this.store = new FarundStore();
	}
}
