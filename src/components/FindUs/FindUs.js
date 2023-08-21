import styles from './FindUs.module.scss'
import Map from './Map'

export default function FindUs() {


    return(
        <div className={styles.FindUs}>
            <h1 className='title' id='findUs'>find us</h1>
            <div>
                {/* <Map /> */}
            </div>
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