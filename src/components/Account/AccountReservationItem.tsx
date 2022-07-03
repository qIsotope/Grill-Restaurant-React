
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/useAuth';
import { IAccountReservationItem } from '../../types/accountBlock';
import { deleteItem } from '../../utils/deleteItemsFromAcc';


export const AccountReservationItem = (props: IAccountReservationItem) => {
	const { email } = useAuth()
	const dispatch = useAppDispatch()
	return (
		<div className="account-review-item">
			<div className="single-item-header">
				<div className="singleitem-author">
					{props.type}
				</div>
				<div className="single-item-date">
					{email === props.userEmail &&
						<div style={{ justifyContent: 'end' }}>
							<div onClick={() => { deleteItem(props.id, props.type, props.setReservations, email, dispatch); }} className="singleitem-delete">
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
