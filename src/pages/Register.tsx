
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthForm } from '../components/AuthForm/AuthForm';
import { Loader } from '../components/Loader/Loader';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { showLoader, hideLoader } from '../redux/slices/loaderSlice'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';


export const Register: React.FC = () => {
	const loader = useAppSelector(state => state.loader.isLoader)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const register = (email: string, password: string) => {

		dispatch(showLoader())
		const auth = getAuth();

		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				navigate('/')
				dispatch(hideLoader())
			})
			.catch((e) => {
				alert(`error: ${e.message}`)
				dispatch(hideLoader())
			})
	}

	return (
		<section>
			<div className="container">
				<div className="login-page">
					<div className="login-title">
						Регистрация акаунта
					</div>
					<AuthForm title='Зарегистрироваться' handleClick={register} />
					<div className="login__link-title">Если у вас уже есть акаунт</div>
					<Link to='/login' className="login-link">Авторизоваться</Link>
				</div >
				{loader
					&& <Loader />
				}
			</div>
		</section>
	)
}