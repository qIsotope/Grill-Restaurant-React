import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { fetchProducts } from '../../redux/slices/productSlice'
import { SectionLabel } from '../sectionLabel/SectionLabel'
import { DeliveryCategory } from './DeliveryCategory'
import { DeliveryProductsList } from './DeliveryProductsList'
import { DeliverySkeletonList } from './DeliverySkeletonList'

export const Delivery = () => {
	const dispatch = useAppDispatch()
	const products = useAppSelector(state => state.product.product)
	const status = useAppSelector(state => state.product.status)
	useEffect(() => {
		dispatch(fetchProducts('https://62965300810c00c1cb73a6b4.mockapi.io/products?category=steak'))
	}, [])

	//

	return (
		<section className="delivery">
			<div className="container">
				<div className="delivery-header">
					<SectionLabel title='DELIVERY' subtitle='Our Delivery' />
					<DeliveryCategory />
				</div>
				<div className="delivery-content">
					{status === 'loading'
						? <DeliverySkeletonList />
						: <DeliveryProductsList products={products} />
					}
				</div>
			</div>
		</section>
	)
}
