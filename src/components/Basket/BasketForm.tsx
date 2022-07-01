import { useState } from 'react'
import { MyInput } from '../inputMask/inputMask'
import { Formik } from 'formik';
import * as yup from 'yup'
import { Loader } from '../Loader/Loader';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption, } from "@reach/combobox";
import "@reach/combobox/styles.css";
import Select from 'react-select'
import { useAppSelector } from '../../hooks/redux-hooks';
import { sendEmail } from '../../utils/sendOrder';
import { makeOptions } from '../../utils/makeOptions';
import { ISuggestions, ISelectOptions, Ifunc, IBasketForm } from '../../types/basketTypes';


export const BasketForm = ({ sumOfOrder, cartProducts }: IBasketForm) => {
	const dispatch = useDispatch()
	const loader = useAppSelector(state => state.loader.isLoader)
	const { email } = useAuth()
	const [error, setError] = useState(false)
	const [addresValue, setAddresValue] = useState('')
	const [suggestions, setSuggestions] = useState<ISuggestions[]>([])
	const [postOptions, setPostOptions] = useState<ISelectOptions[]>([])
	const [selectPostValue, setSelectPostValue] = useState<ISelectOptions | null>(null);
	const [hide, setHide] = useState(false)
	const [zeroWarehouse, setZeroWarehouse] = useState(false)


	const renderSuggestions = (func: Ifunc) => suggestions?.length > 0
		? suggestions.map((s) => (
			<ComboboxOption onClick={() => selectAdress(s, func)} key={s.Ref} value={s.Present} />
		))
		: <ComboboxOption value={'Not Found :('} />

	const onAdressChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		setHide(false)
		setAddresValue(e.target.value)
		setPostOptions([])
		setSelectPostValue(null)
		const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', `{
			"apiKey": "d5590781329ed8f7682848d2d151c3df",
			"modelName": "Address",
			"calledMethod": "searchSettlements",
			"methodProperties": {
				"CityName": "${addresValue}",
				"Limit": "5",
				"Page": "1"
			}
		}`)
		setSuggestions(response.data.data[0]?.Addresses)
		setZeroWarehouse(false)
	}


	const selectAdress = async (value: ISuggestions, func: any) => {
		setAddresValue(value.Present)
		setHide(true)
		const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', `{
			"apiKey": "d5590781329ed8f7682848d2d151c3df",
			"modelName": "Address",
			"calledMethod": "getWarehouses",
			"methodProperties": {
				"CityName": "${value.MainDescription}",
				"CityRef": "${value.DeliveryCity}",
				"Limit": "100",
				"Language": "UA",
				"Page": "1"
			}
		}`)
		const optionsForSelect = makeOptions(response.data.data)
		setPostOptions(optionsForSelect)
		func("adress")(value.Present);
		if (response.data.data.length === 0) {
			setZeroWarehouse(true)
		}
	}


	const validationsSchema = yup.object().shape({
		name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
		phone: yup.string().transform(value => value.replace(/[^\d]/g, '')).min(12, 'Введите корректный номер').required('Обязательно'),
		email: yup.string().email('Введите верный email').required('Обязательно'),
		adress: yup.string().typeError('Должно быть строкой').required('Обязательно'),
		post: yup.string().typeError('Должно быть строкой').required('Обязательно'),
	})


	return (
		<div className="modal-form">
			<div className="modal__form-label">Your information</div>
			<Formik
				initialValues={{
					name: '',
					phone: '',
					email: '',
					adress: '',
					post: ''
				}}
				validateOnBlur
				onSubmit={(values, e) => {
					sendEmail(values, e, dispatch, cartProducts, sumOfOrder, email, setError)
				}}
				validationSchema={validationsSchema}
			>
				{({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
					<div>
						<div>
							<input className="modal-input" name="name" type="text" placeholder="Name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
						</div>
						{touched.name && errors.name && <p className={'error-validate'}>{errors.name}</p>}
						<div>
							<MyInput className="modal-input" placeholder={'Phone'} name='phone' onChange={handleChange} onBlur={handleBlur} value={values.phone} />
						</div>
						{touched.phone && errors.phone && <p className={'error-validate'}>{errors.phone}</p>}
						<div>
							<input className="modal-input" name="email" type="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
						</div>
						{touched.email && errors.email && <p className={'error-validate'}>{errors.email}</p>}
						<Combobox aria-label="choose a fruit">
							<ComboboxInput className={'modal-input'} placeholder='Addres' onChange={(e) => onAdressChange(e)} value={addresValue} name='adress' />
							<ComboboxPopover className={hide ? 'hide' : ''}>
								<ComboboxList>
									{renderSuggestions(handleChange)}
								</ComboboxList>
							</ComboboxPopover>
						</Combobox>
						{touched.adress && errors.adress && <p className={'error-validate'}>{errors.adress}</p>}
						{zeroWarehouse && <div className="error-validate">In This city no NovaPoshta warehouse</div>}
						<Select placeholder={!hide ? "Before select adress" : "Post adress"}
							name='post'
							isDisabled={!hide || zeroWarehouse}
							classNamePrefix="react-select"
							options={postOptions}
							value={selectPostValue}
							onChange={v => {
								setSelectPostValue(v)
								if (v) {
									handleChange("post")(v.label);
								}
							}}
						/>
						{touched.post && errors.post && <p className={'error-validate'}>{errors.post}</p>}
						<div className="modal-sumprice">
							<div className="modal__sumprice-label">Total:</div>
							<div className="modal__sumprice-digit">{sumOfOrder.toFixed(2)}<span className="modal-currency">$</span></div>
						</div>
						<div className="modal-submit">
							<button type="submit" className="modal-button" onClick={() => handleSubmit()}>ORDER</button>
						</div>
					</div>
				)
				}
			</Formik >
			{loader && <Loader />}
			{error && <div className="error-service">Error. This service is unavailable</div>}
		</div>
	)
}
