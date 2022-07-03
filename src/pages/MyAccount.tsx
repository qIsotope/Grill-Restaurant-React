import axios from 'axios'
import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { AccountHeader } from '../components/Account/AccountHeader'
import { AccountOrderList } from '../components/Account/AccountOrderList'
import { AccountReservationList } from '../components/Account/AccountReservationList'
import { AccountReviewList } from '../components/Account/AccountReviewList'
import { Loader } from '../components/Loader/Loader'
import { SectionLabel } from '../components/sectionLabel/SectionLabel'
import { accountCategories } from '../data/data'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { useAuth } from '../hooks/useAuth'
import { hideLoader, showLoader } from '../redux/slices/loaderSlice'
import { IOrderFetch, IReservationFetch, IAccountReviewList } from '../types/accountBlock'
import { fetchAvatar } from '../utils/fetchAvatar'
import { fetchItems } from '../utils/fetchItems'
import { AccountImage } from './AccountImage'


export const MyAccount = () => {
	const loader = useAppSelector(state => state.loader.isLoader)
	const dispatch = useAppDispatch()
	const { email } = useAuth()
	const [orders, setOrders] = useState<IOrderFetch[]>([])
	const [reservations, setReservations] = useState<IReservationFetch[]>([])
	const [reviews, setReviews] = useState<IAccountReviewList[]>([])
	const [selected, setSelected] = useState(0)

	const [fetchAva, setFetchAva] = useState('')

	useEffect(() => {
		fetchItems(`https://62965300810c00c1cb73a6b4.mockapi.io/comments?email=${email}`, setReviews, '', false)
		fetchItems('https://62965300810c00c1cb73a6b4.mockapi.io/orders?type=order', setOrders, email, true)
		fetchItems('https://62965300810c00c1cb73a6b4.mockapi.io/orders?type=reservation', setReservations, email, true)
		fetchAvatar(email, setFetchAva)
	}, [])
	const deleteItem = async (id: string, type: string, setItems: any) => {
		dispatch(showLoader())
		await axios.delete('https://62965300810c00c1cb73a6b4.mockapi.io/orders/' + id)
		const response = await axios.get('https://62965300810c00c1cb73a6b4.mockapi.io/orders?type=' + type)
		setItems(response.data.filter((r: { userEmail: string | null }) => r.userEmail === email))
		dispatch(hideLoader())
	}

	const data2 = [
		{
			content: <AccountOrderList orders={orders} delete={deleteItem} setOrders={setOrders} />,
		},
		{
			content: <AccountReservationList reservations={reservations} delete={deleteItem} setReservations={setReservations} />,
		},
		{
			content: <AccountReviewList reviews={reviews} setReviews={setReviews} />
		},
	]
	


	return (
		<section className="account">
			<div className="container">
				<SectionLabel title={'Your Account'} subtitle='Account' />
				<AccountHeader email={email} />
				<div className="account-block">
					<AccountImage fetchAva={fetchAva} />
					<div className="account-info">
						<div className="category-container">
							{accountCategories.map((item, i) => (
								<React.Fragment key={i}>
									<h1 className={selected === i ? 'account-category account-category-active' : "account-category"} onClick={() => setSelected(i)}>{item.title} </h1>
								</React.Fragment>
							))}
						</div>
						{data2.map((item, i) => (
							<div key={i} className={selected === i ? '' : 'hide'}>
								{item.content}
							</div>
						))}
					</div>
				</div>
				{loader && <Loader />}
			</div>
		</section >
	)
}


