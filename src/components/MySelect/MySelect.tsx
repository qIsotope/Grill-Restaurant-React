import React, { useState } from 'react'
import Select, { OnChangeValue } from 'react-select'

const customStyles = {
	option: (provided: any, state: any) => ({
		...provided,
		marginTop: '-5px',
		marginBottom: '-4px',
		color: 'white',
		backgroundColor: 'black',
		padding: 20,
		overflow: 'hidden',
		fontSize: '16px',
	}),
	control: (provided: any) => ({
		...provided,
		backgroundColor: 'black',
		color: 'white',
		border: 'none',
	}),
	singleValue: (provided: any, state: any) => ({
		...provided,
		color: 'white',
		fontSize: '16px',
	}),

	placeholder: (provided: any, state: any) => ({
		...provided,
		fontSize: '16px',
	}),
}

interface ISelectItem {
	value: string;
	label: string;
}

interface IMySelect {
	options: ISelectItem[]
	selected: ISelectItem
	setSelected: (value: any) => void;
}


export const MySelect = ({ options, selected, setSelected }: IMySelect) => {

	return (
		<div className="form-input">
			<Select defaultValue={options[0]} styles={customStyles} options={options}
				value={selected}
				onChange={v => setSelected(v)}
				theme={(theme) => ({
					...theme,
					borderRadius: 0,
					colors: {
						...theme.colors,
						primary50: "red",
						primary: "red",
						neutral80: "white",
					}
				})}
			/>
		</div>
	)
}