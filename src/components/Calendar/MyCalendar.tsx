import Calendar from 'react-calendar';
interface IMyCalendar {
	value: Date;
	convertDate: (e: Date) => string
	changeDateCalendar: (e: Date) => void
}

export function MyCalendar({ value, changeDateCalendar }: IMyCalendar) {

	return (
		<div>
			<Calendar minDate={new Date()} onChange={changeDateCalendar} value={value} />
		</div>
	);
}