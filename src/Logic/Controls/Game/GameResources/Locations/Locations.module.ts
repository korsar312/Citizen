import { LocationsPlaces } from "./Locations.places";
import { LocationsGraph } from "./Locations.graph";

export class LocationsModule {
	public locationsPlaces: LocationsPlaces;
	public locationsGraph: LocationsGraph;

	constructor() {
		this.locationsPlaces = new LocationsPlaces();
		this.locationsGraph = new LocationsGraph();
	}
}
