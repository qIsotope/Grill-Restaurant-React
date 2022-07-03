import { useAuth } from '../../hooks/useAuth'
import { IAccountOrderList } from '../../types/accountBlock'
import { AccountOrderItem } from './AccountOrderItem'




export const AccountOrderList = (props: IAccountOrderList) => {
	const {email} = useAuth()
	if (props.orders.length === 0) {
		return (
			<>
				<div className='account-orders-label'>НЕТ ЗАКАЗОВ</div>
			</>
		)

	}
	else
		return (
			<>
				<div className="account-orders">
					<div className="account-orders-list">
						{props.orders.map((order) => (
							<AccountOrderItem type={order.type} items={order.items} date={order.date} key={order.id}
								delete={props.delete} setOrders={props.setOrders} id={order.id} userEmail={order.userEmail}
							/>
						))}
					</div>
				</div>
			</>
		)
}
