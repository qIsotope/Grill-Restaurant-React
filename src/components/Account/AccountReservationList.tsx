
import { IAccountReservationList } from '../../types/accountBlock'
import { AccountReservationItem } from './AccountReservationItem'


export const AccountReservationList = (props: IAccountReservationList) => {

	if (props.reservations.length === 0) {
		return (
			<>
				<div className='account-orders-label'>НЕТ РЕЗЕРВАЦИЙ</div>
			</>
		)
	}
	else return (
		<>
			<div className="account-orders">
				<div className="account-orders-list">
					{props?.reservations.map((reservation) =>
						<AccountReservationItem delete={props.delete} type={reservation.type}
							date={reservation.date} hours={reservation.hours}
							key={reservation.id} id={reservation.id} userEmail={reservation.userEmail}
							setReservations={props.setReservations}
						/>)}
				</div>
			</div>

		</>
	)
}
