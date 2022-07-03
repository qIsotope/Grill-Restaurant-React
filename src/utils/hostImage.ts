import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";
import { showLoader, hideLoader } from "../redux/slices/loaderSlice";


export const hostImage = (file: any, dispatch: any, email: string | null, setAvaUrl: (v: string) => void) => {
	if (file !== null && file !== undefined) {
		dispatch(showLoader())
		file.userEmail = email
		const storageRef = ref(storage, 'images/' + file?.name);
		const uploadTask = uploadBytesResumable(storageRef, file,);
		uploadTask.on('state_changed',
			(snapshot: any) => { },
			(error: { code: string }) => {
				switch (error.code) {
					case 'storage/unauthorized':
						break;
					case 'storage/canceled':
						alert(error.code);
						break;
					case 'storage/unknown':
						alert(error.code);
						break;
				}
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setAvaUrl(downloadURL);
					dispatch(hideLoader())
				})
			}
		);
	}
}