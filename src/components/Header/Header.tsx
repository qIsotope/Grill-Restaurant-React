
import { HeaderLogo } from './HeaderLogo'
import { HeaderTop } from './HeaderTop'
import { HeaderNavigation } from './HeaderNavigation'
import { useLocation } from 'react-router-dom'

interface IHeader {
	isAuth: boolean;
}

export const Header = ({ isAuth }: IHeader) => {
	let location = useLocation();
	return (
		<header className={(location.pathname === '/' && !isAuth) ? "header" : "header header-active"}>
			<div className="header-horizontal-line"></div>
			<div className="container">
				<HeaderTop />
				<div className="header-bot">
					<HeaderLogo />
					{
						!isAuth && <HeaderNavigation />
					}

				</div>
			</div>
		</header>
	)
}
