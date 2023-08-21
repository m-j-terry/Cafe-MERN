import styles from './About.module.scss'

export default function About() {
    return(
        <div className={styles.About}>
            <h1 className='title' id='about'>about</h1>
            <div className={styles.AboutFlex}>
                <div>
                <img className={styles.matcha} src="https://i.imgur.com/DQznltT.jpg"/>
                </div>
                <div className={styles.right}>
                    <p className={styles.aboutparagraph}>hello.</p>
                    <p></p>
                    <p className={styles.aboutparagraph}>welcome to halmet coffee company, founded February 2nd, 2020.</p>
                    <p></p>
                    <p className={styles.aboutparagraph}>at hamlet, we are committed to sustainable aggriculture and a more humane economy, sourcing our milks from family-owned NY state farms, our pastries from locally-owned bakery Runner and Stone, and our beans from fair-trade-certified coffee farms around the world.</p>
                    <p></p>
                    <p className={styles.aboutparagraph}></p>
                </div>
            </div>
        </div>
    )
} 