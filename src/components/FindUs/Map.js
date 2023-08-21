import styles from './FindUs.module.scss'
import { GoogleMap, withScriptjs, useLoadScript, withGoogleMap, Marker } from "react-google-maps"

const center = { lat: 40.6630459, lng: -73.9542193 }

export default function Map() { 
    // return (
    //     <div>
    //         <header src="https://maps.googleapis.com/maps/api/js?key={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}"></header>
    //         <GoogleMap 
    //             Zoom={10} 
    //             center={center} 
    //             className='map' 
    //         >
    //             <Marker 
    //                 position={center}
    //             />
    //         </GoogleMap>
    //     </div>
    // )
}