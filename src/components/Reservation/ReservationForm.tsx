import React, { useState } from 'react'
import { MyInput } from '../inputMask/inputMask'
import { Formik } from 'formik';
import * as yup from 'yup'
import emailjs from '@emailjs/browser';
import { Loader } from '../Loader/Loader';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';
import { IReservationForm } from '../../types/reservationTypes';



export const ReservationForm = ({ dateValue, peopleValue, hoursValue }: IReservationForm) => {
	const { email } = useAuth()
	const [error, setError] = useState(false)
	const [thanks, setThanks] = useState(false)
	const [loader, setLoader] = useState(false)
	const validationsSchema = yup.object().shape({
		name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
		phone: yup.string().transform(value => value.replace(/[^\d]/g, '')).min(12, 'Введите корректный номер').required('Обязательно'),
	})

	const reset = async (e: any) => {
		setLoader(false)
		e.resetForm()
	}

	const postReservation = async (values: any) => {
		await axios.post('https://62965300810c00c1cb73a6b4.mockapi.io/orders', values)
	}

	const sendEmail = async (values: any, e: any) => {
		setLoader(true)
		values.date = dateValue
		values.people = peopleValue.value
		values.hours = hoursValue.value
		values.userEmail = email
		values.type = 'reservation'
		await emailjs.send('service_uaw9q0y', 'template_b2s9wjd', values, 'TAAu1HERcIl3Df5lP')
			.then((result) => {
				if (result.status === 200) {
					setThanks(true)
					setTimeout(() => {
						setThanks(false)
					}, 3000);
				}
			}, (error) => {
				setError(true)
				console.log(error);
				setTimeout(() => {
					setError(false)
				}, 3000);
			});
		postReservation(values)
		reset(e)
	}

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					phone: '',
				}}
				validateOnBlur
				onSubmit={(values, e) => {
					sendEmail(values, e)
				}}
				validationSchema={validationsSchema}
			>
				{({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
					<div>
						<div className="form-input">
							<input className="req" name="name" type="text" placeholder="Name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
						</div>
						{touched.name && errors.name && <p className={'error-validate'}>{errors.name}</p>}

						<div className="form-input">
							<MyInput placeholder={'Phone'} name='phone' onChange={handleChange} onBlur={handleBlur} value={values.phone} />
						</div>
						{touched.phone && errors.phone && <p className={'error-validate'}>{errors.phone}</p>}
						<div className="form-input">
							<input name="date" className="reservation-date " type="text" placeholder="Date" value={dateValue} disabled onChange={handleChange} onBlur={handleBlur} />
						</div>
						<button type="submit" className="reservation-send" onClick={() => handleSubmit()}>Reservation</button>
					</div>
				)
				}
			</Formik >
			{loader && <Loader />}
			{thanks && <div className="success-order">Thank u for reservation. We will contact you shortly.</div>}
			{error && <div className="error-service">Error. This service is unavailable</div>}
		</>
	)
}
