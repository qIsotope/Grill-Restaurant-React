
import { useAuth } from '../../hooks/useAuth';
import { IAccountOrderItem } from '../../types/accountBlock';




export const AccountOrderItem = (props: IAccountOrderItem) => {
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
							<div onClick={() => { props.delete(props.id, props.type, props.setOrders) }} className="singleitem-delete">
								<span>x</span>
							</div>
						</div>
					}
					{props.date}
				</div>
			</div>
			<div className="account-review-text nohover">
				Items: <br /> <br /> {props.items}
			</div>
			
		</div>
	)
}
