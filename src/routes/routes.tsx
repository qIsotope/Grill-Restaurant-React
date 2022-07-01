import { AboutPage } from "../pages/AboutPage"
import { BasketPage } from "../pages/BasketPage"
import { Login } from "../pages/Login"
import { MainPage } from "../pages/MainPage"
import { MyAccount } from "../pages/MyAccount"
import { ProductItem } from "../pages/ProductItem"
import { Register } from "../pages/Register"
import { ServicesPage } from "../pages/ServicesPage"

export const publicRoutes = [
	{ path: '*', component: <MainPage /> },
	{ path: '/about', component: <AboutPage /> },
	{ path: '/services', component: <ServicesPage /> },
	{ path: '/basket', component: <BasketPage /> },
	{ path: '/services/:id', component: <ProductItem /> },
	{ path: '/account', component: <MyAccount /> },	
]


export const privateRoutes = [
	{ path: '*', component: <Login /> },
	{ path: '/register', component: <Register /> },
]