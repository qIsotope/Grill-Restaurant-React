import React from 'react'
import { useAppDispatch } from '../../hooks/redux-hooks';
import { removeUser } from '../../redux/slices/userSlice';

interface AccountHeader {
	email: string | null;
}

export const AccountHeader: React.FC<AccountHeader> = (props) => {
	const dispatch = useAppDispatch()
	const exit = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault()
		dispatch(removeUser())
		localStorage.removeItem('email')
	}
	return (
		<div className="account-header">
			<div className="account-email">
				<span >Your Account:</span>
				<span >{props.email}</span>
			</div>
			<div className="account-exit" onClick={(e) => exit(e)}>Exit</div>
		</div>
	)
}
