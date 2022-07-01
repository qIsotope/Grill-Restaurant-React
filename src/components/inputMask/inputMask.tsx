import React, { FocusEvent } from 'react';
import InputMask from 'react-input-mask';

interface IMyInput {
	name: string
	onBlur: (e: FocusEvent<HTMLInputElement>) => void
	onChange: (e: React.ChangeEvent<any>) => void
	placeholder: string
	value: string
	className?: string
}

export const MyInput = (props: IMyInput) => {
	return (
		<InputMask mask="+(380) 99 99 99 999" {...props}>
		</InputMask>
	)

};