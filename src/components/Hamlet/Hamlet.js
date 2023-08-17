import styles from './Hamlet.module.scss'

export default function Hamlet() {
    return(
        <div className={styles.hamlet}>
            <h1 className='title'>hamlet</h1>
            <img className={styles.hamletImg} src="https://i.imgur.com/n94ZpmJ.jpg"/>
            <h2 className='title'>coffee company</h2>
        </div>
    )
} 