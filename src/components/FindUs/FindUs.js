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
    
    return(
        <div className='FindUs'>
            <h1 className='title'>find us</h1>
            <div className='map'></div>
            <h2 className='title'>Location and Hours</h2>
            <div className='flexbox'>
                <div className='left'>
                    <p className='par' id='address'>465 Rogers Ave.</p>
                    <p className='par' id='address'>#1</p>
                    <p className='par' id='address'>Brooklyn, NY 11225</p>
                </div>
                <div className='middle'>
                </div>
                <div className='right'>
                    <p className='par'>Sunday 7 AM-5 PM</p>
                    <p className='par'>Monday 7 AM-5 PM</p>
                    <p className='par'>Tuesday 7 AM-5 PM</p>
                    <p className='par'>Wednesday 7 AM-5 PM</p>
                    <p className='par'>Thursday 7 AM-5 PM</p>
                    <p className='par'>Friday 7 AM-5 PM</p>
                    <p className='par'>Saturday 7 AM-5 PM</p>
                </div>
            </div>
        </div>
    )
}