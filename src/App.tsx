import './styles/all.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import './firebase'
import { useAuth } from './hooks/useAuth'
import { privateRoutes, publicRoutes } from './routes/routes';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';

const App: React.FC = () => {
	const location = useLocation()
	const { isAuth } = useAuth()
	return (

		<div className="wrapper">
			<Header isAuth={isAuth} />
			<TransitionGroup component={null}>
				<CSSTransition key={location.key} classNames="fade" timeout={800}>
					<Routes location={location}>
						{isAuth
							? privateRoutes.map(route =>
								<Route key={route.path} path={route.path} element={route.component} />
							)
							: publicRoutes.map(route =>
								<Route key={route.path} path={route.path} element={route.component} />)
						}
					</Routes>
				</CSSTransition>
			</TransitionGroup>

			{(location.pathname !== '/basket' && !isAuth) &&
				<Footer />
			}
		</div >
	);
}

export default App;
