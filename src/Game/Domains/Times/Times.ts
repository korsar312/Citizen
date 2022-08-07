import { TimesInterface } from "./Times.interface";
import { numberMonth } from "./Calendar/Month";
import { numberDayOfTheWeek } from "./Calendar/Day";
import { numberWeek } from "./Calendar/Week";

export class Times {
	private date: TimesInterface.TFullDate;

	private listDate = {
		day: numberDayOfTheWeek,
		week: numberWeek,
		month: numberMonth,
	};

	constructor(date: TimesInterface.TFullDate) {
		this.date = {
			minute: date.minute,
			hour: date.hour,
			day: date.day,
			week: date.week,
			month: date.month,
			year: date.year,
		};
	}

	private addHours() {
		this.date.hour = this.addCount(this.date.hour, 24, this.addDay) as TimesInterface.TFullDate["hour"];
	}

	private addDay() {
		this.date.day = this.addCount(this.date.day, 6, this.addYears) as TimesInterface.TFullDate["day"];
	}

	private addYears() {
		this.date.year += 1;
	}

	private addCount(count: number, max: number, addFunc: () => void) {
		if (count + 1 >= max) {
			addFunc.call(this);
			return 0;
		} else {
			return count + 1;
		}
	}

	public addTime(minutes: number) {
		let calculateMinutes = minutes;

		for (calculateMinutes; calculateMinutes >= 60; calculateMinutes -= 60) {
			this.addHours();
		}

		this.date.minute = calculateMinutes as TimesInterface.TFullDate["minute"];
	}

	getDays() {
		return this.listDate.day;
	}

	getCurrentDate(): TimesInterface.TFullDate {
		return this.date;
	}

	getNameCurrentDay(): TimesInterface.EDayOfTheWeekWord {
		return this.listDate.day[this.date.day];
	}
}
