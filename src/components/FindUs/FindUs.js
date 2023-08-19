import styles from './FindUs.module.scss'
// require('dotenv').config()
export default function FindUs() {
// Initialize and add the map
    // let map;

    // async function initMap() {
    //     // The location of Uluru
    //     const position = { lat: 40.6630459, lng: -73.9542193 };
    //     // Request needed libraries.
    //     //@ts-ignore
    //     const { Map } = await google.maps.importLibrary("maps");
    //     const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    //     // The map, centered at 465 Rogers Ave
    //     map = new Map(document.getElementById("map"), {
    //         zoom: 4,
    //         center: position,
    //         mapId: "DEMO_MAP_ID",
    //     });

    //     // The marker, positioned at 465 Rogers Ave
    //     const marker = new AdvancedMarkerElement({
    //         map: map,
    //         position: position,
    //         title: "hamlet coffee co",
    //     });
    // }
    // initMap();
    
// "use strict";
// async function requestApi() {
//     await fetch(`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_APIKEY}&callback=initMap`) 
// }
// requestApi()
// function initMap() {
//     const myLatLng = {
//         lat: 40.661041259765625,
//         lng: -73.9532699584961
//     };
//     const map = new google.maps.Map(document.getElementById("gmp-map"), {
//         zoom: 14,
//         center: myLatLng,
//         fullscreenControl: false,
//         zoomControl: true,
//         streetViewControl: false
//     });
//     new google.maps.Marker({
//         position: myLatLng,
//         map,
//         title: "My location"
//     });
// }

    return(
        <div className={styles.FindUs}>
            <h1 className='title'>find us</h1>
            <div className='map' id='gmp-map'></div>
            <h2 className='title'>location and hours</h2>
            <div className={styles.flexbox}>
                <div className={styles.left}>
                    <p className={styles.par} id={styles.address}>465 Rogers Ave.<br />#1<br/>Brooklyn, NY 11225</p>
                </div>
                <div className='middle'>
                </div>
                <div className='right'>
                    <p className={styles.par}>Sunday 7 AM-5 PM</p>
                    <p className={styles.par}>Monday 7 AM-5 PM</p>
                    <p className={styles.par}>Tuesday 7 AM-5 PM</p>
                    <p className={styles.par}>Wednesday 7 AM-5 PM</p>
                    <p className={styles.par}>Thursday 7 AM-5 PM</p>
                    <p className={styles.par}>Friday 7 AM-5 PM</p>
                    <p className={styles.par}>Saturday 7 AM-5 PM</p>
                </div>
            </div>
        </div>
    )
}