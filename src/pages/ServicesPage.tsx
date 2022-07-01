import React from 'react'
import { Reservation } from '../components/Reservation/Reservation'
import { Delivery } from '../components/Delivery/Delivery'
export const ServicesPage: React.FC = () => {
	return (
		<>
			<Reservation />
			<Delivery />
		</>
	)
}
