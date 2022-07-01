import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Loader } from '../components/Loader/Loader'
import { AuthForm } from '../components/AuthForm/AuthForm'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { showLoader, hideLoader } from '../redux/slices/loaderSlice'
import { setUser } from '../redux/slices/userSlice'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'

export const Login: React.FC = () => {
	const loader = useAppSelector(state => state.loader.isLoader)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const autheficate = (email: string, password: string) => {
		dispatch(showLoader())
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }: any) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.refreshToken,
				}));
				navigate('/')
				dispatch(hideLoader())
				localStorage.setItem('email', user.email)
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
						Авторизация
					</div>
					<AuthForm title='Авторизоваться' handleClick={autheficate} />
					<div className="login__link-title">Если у вас нет акаунта, зарегистрируйтесь</div>
					<Link to='/register' className="login-link">Зарегистрироваться</Link>
				</div >
				{loader
					&& <Loader />
				}
			</div>
		</section>
	)
}
