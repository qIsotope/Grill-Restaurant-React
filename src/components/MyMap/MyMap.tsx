import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

export const MyMap = () => {
	const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyD5qr_4MgZTpIIRkDBcHJgHs-xu62oj6IA" })

	if (!isLoaded) {
		return <div>Loading...</div>
	}
	return <Map />

}

function Map() {
	const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
	return (
		<GoogleMap zoom={10} center={center} mapContainerClassName="footer-map-react">
			<Marker position={center} />
		</GoogleMap>
	)
}	
