import React from 'react'
import { Advantages } from '../components/Advantages/Advantages'
import { Home } from '../components/Home/Home'
import { Reviews } from '../components/Reviews/Reviews'

export const MainPage: React.FC = () => {
	return (
		<>
			<Home />
			<Advantages />
			<Reviews />
		</>
	)
}
