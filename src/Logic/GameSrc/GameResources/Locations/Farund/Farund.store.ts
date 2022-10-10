export class FarundStore {
	private times: string | null = "";
	private place: string | null = "";

	public setTimes(time: string) {
		this.times = time;
	}

	public setPlace(place: string) {
		this.place = place;
	}

	public getTimes() {
		return this.times;
	}

	public getPlace() {
		return this.place;
	}
}
