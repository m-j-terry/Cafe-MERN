import { useMemo } from 'react'
import { GoogleMap, useJsApiLoader, Marker, useLoadScript } from '@react-google-maps/api';
import sendRequest from '../../utilities/send-request'
import styles from './FindUs.module.scss'

export default function Map() {

    async function fetchApiKey() {
        const apiKey = await sendRequest('/api/apiKeys/64e441cc2308026870cd57bb')
        return(apiKey.apiKey)
    }
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: `${fetchApiKey()}`
    })

    const center = useMemo(() => ({ lat: 40.6630459, lng: -73.9542193 }), [])

    return (
        <div className={styles.Map}>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName={styles.mapContainer}
                    center={center}
                    zoom={10}
                > 
                    <Marker position={center} />
                </ GoogleMap>
            )}
        </div>
    )
}
