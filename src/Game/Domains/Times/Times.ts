import { TimesInterface } from "./Times.interface";
import { numberMonth } from "./Calendar/Month";
import { numberDayOfTheWeek } from "./Calendar/Day";

export class Times {
	private date: TimesInterface.TFullDate;
	private days: TimesInterface.TListDays = numberDayOfTheWeek;
	private month: TimesInterface.TListMonth = numberMonth;

	constructor(date: TimesInterface.TFullDate) {
		this.date = {
			minute: date.minute,
			hours: date.hours,
			day: date.day,
			week: date.week,
			month: date.month,
			years: date.years,
		};
	}

	getWeek() {
		return this.days;
	}

	setCurrentDate(
		date: ((oldDate: TimesInterface.TFullDate) => TimesInterface.TFullDate) | TimesInterface.TFullDate,
	) {
		this.date = typeof date === "function" ? date(this.date) : date;
	}

	getCurrentDate(): TimesInterface.TFullDate {
		return this.date;
	}

	getNameCurrentDay(): TimesInterface.EDayOfTheWeekWord {
		return this.days[this.date.day];
	}
}
