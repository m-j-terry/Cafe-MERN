import styles from './ContactUs.module.scss'
export default function ContactUs(){
    return(
        <div className={styles.ContactUs}>
            <h1 className='title'>contact us</h1>
            <div className={styles.icons}>
                <img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" className={styles.icon} href='https://www.instagram.com/hamletcoffeecompany/' alt=""/>
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" className={styles.icon} href='' alt=""/>
            </div>
        </div>
    )
}