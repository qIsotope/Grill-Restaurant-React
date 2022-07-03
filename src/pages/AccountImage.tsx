import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage'
import React, { useEffect, useRef, useState } from 'react'
import { storage } from '../firebase'
import { useAppDispatch } from '../hooks/redux-hooks'
import { useAuth } from '../hooks/useAuth'
import { uploadAvatar } from '../utils/uploadAvatar'
import { showLoader, hideLoader } from '../redux/slices/loaderSlice'
import { getURLforAva } from '../utils/getUrlForAvatar'
import { hostImage } from '../utils/hostImage'

export const AccountImage = (props: any) => {
	const dispatch = useAppDispatch()
	const { email } = useAuth()
	const inputFile = useRef<HTMLInputElement>(null)
	const [file, setFile] = useState<any>(null)
	const [avaURL, setAvaUrl] = useState('')
	useEffect(() => {
		hostImage(file, dispatch, email, setAvaUrl)
	}, [file])

	return (
		<div className="account-image">
			<img src={getURLforAva(file, props.fetchAva)} alt="" />
			<div className="account-upload">
				<input ref={inputFile} style={{ display: 'none' }} accept="image/*"
					type="file" onChange={(e: any) => setFile(e.target.files[0])} />
				<button className={'choose-img'} onClick={() => inputFile.current?.click()}>Choose photography</button>
				<button className={'upload-img'} onClick={() => uploadAvatar(dispatch, email, avaURL)}>Save</button>
			</div>
		</div>
	)
}
