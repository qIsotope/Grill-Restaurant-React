import React, { useState } from 'react'
import { DeliveryCategoryItem } from './DeliveryCategoryItem'
import { fetchProducts } from '../../redux/slices/productSlice'
import { categoryData } from '../../data/data'
import { useAppDispatch } from '../../hooks/redux-hooks'

export const DeliveryCategory: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState(0)
	const dispatch = useAppDispatch()

	const changeCategory = (title: string, i: number) => {
		dispatch(fetchProducts(`https://62965300810c00c1cb73a6b4.mockapi.io/products?category=${title}`))
		setActiveCategory(i)
	}

	return (
		<div className="delivery-category">
			{categoryData.map((item, i) => <DeliveryCategoryItem key={item.id}
				onClick={() => changeCategory(item.title, i)}
				className={i === activeCategory ? 'delivery__category-item delivery-active' : 'delivery__category-item'}
			>{item.title}</DeliveryCategoryItem>)
			}
		</div >
	)
}
