
import { useAuth } from '../../hooks/useAuth';
import { IAccountReservationItem } from '../../types/accountBlock';


export const AccountReservationItem = (props: IAccountReservationItem) => {
	const { email } = useAuth()
	return (
		<div className="account-review-item">
			<div className="single-item-header">
				<div className="singleitem-author">
					{props.type}
				</div>
				<div className="single-item-date">
					{email === props.userEmail &&
						<div style={{ justifyContent: 'end' }}>
							<div onClick={() => { props.delete(props.id, props.type, props.setReservations) }} className="singleitem-delete">
								<span>x</span>
							</div>
						</div>
					}
					{props.date} {props.hours}
				</div>
			</div>
		</div>
	)
}
