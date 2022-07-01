import axios from 'axios'
import { useEffect, useState } from 'react'
import { reservationHoursData, reservationPeopleData } from '../../data/data'
import { convertDate } from '../../utils/convertDate'
import { MyCalendar } from '../Calendar/MyCalendar'
import { MySelect } from '../MySelect/MySelect'
import { SectionLabel } from '../sectionLabel/SectionLabel'
import { ReservationForm } from './ReservationForm'

export const Reservation = () => {
	const [arrayOfHours, setArrayOfHours] = useState(reservationHoursData);
	const [selectedPeople, setSelectedPeople] = useState(reservationPeopleData[0]);
	const [selectedHours, setSelectedHours] = useState(reservationHoursData[0]);
	const [value, onChange] = useState(new Date());


	const changeDateCalendar = async (e: Date) => {
		const response = await axios.get('https://62965300810c00c1cb73a6b4.mockapi.io/orders?type=reservation')
		onChange(e)
		for (let i = 0; i < response.data.length; i++) {
			const element = response.data[i];
			if (element.date === convertDate(e)) {
				const correctArray = [...reservationHoursData].filter(i => element.hours !== i.value)
				setArrayOfHours(correctArray)
			} else {
				setArrayOfHours(reservationHoursData)
			}
		}
	}

	useEffect(() => {
		changeDateCalendar(value)
	}, [])

	return (
		<section className="reservation">
			<div className="container">
				<SectionLabel title='BOOK A TABLE' subtitle='Reservations' />
				<div className="reservation-content">
					<div className="reservation-calendar">
						<MyCalendar value={value} convertDate={convertDate} changeDateCalendar={changeDateCalendar} />
					</div>
					<div className="reservation-form">
						<MySelect options={reservationPeopleData} selected={selectedPeople} setSelected={setSelectedPeople} />
						<MySelect options={arrayOfHours} selected={selectedHours} setSelected={setSelectedHours} />
						<ReservationForm peopleValue={selectedPeople} hoursValue={selectedHours} dateValue={convertDate(value)} />
					</div>
				</div>
			</div>
		</section>
	)
}
