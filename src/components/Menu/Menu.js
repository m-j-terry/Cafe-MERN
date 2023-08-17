import { useState } from 'react'
import styles from './menu.module.scss'
export default function menu({
    order, 
    setOrder
}) {
    let newOrder
    return(
        <div className={styles.Menu} data-color='tan'>
            <h1 className='title'>menu</h1>
            <h2 className={styles.item}>coffee & tea</h2>
            <div className={styles.menuFull}>
                <div className={styles.right}>
                    <p className={styles.item}>Espresso</p>
                    <button className={styles.order} onClick={() => { newOrder = [...order, 'Espresso']; setOrder(newOrder) }}>Add to order</button>
                    <p className={styles.item}>Macchiato</p>
                    <button className={styles.order} onClick={() => setOrder([...order, 'Machiato'])}>Add to order</button>
                    <p className={styles.item}>Cortado</p>
                    <button className={styles.order} onClick={() => setOrder([...order, 'Cortado'])}>Add to order</button>
                    <p className={styles.item}>Latte</p>
                    <button className={styles.order} onClick={() => setOrder([...order, 'Latte'])}>Add to order</button>
                    <p className={styles.item}>Mocha</p>
                    <button className={styles.order} onClick={() => setOrder([...order, 'Mocha'])}>Add to order</button>
                </div>
                <div className='this is an empty div for spacing'></div>
                    <div className={styles.left}>
                        <p className={styles.item}>Drip</p>
                        <button className={styles.order} onClick={() => setOrder([...order, 'Drip'])}>Add to order</button>
                        <p className={styles.item}>Tea</p>
                        <button className={styles.order} onClick={() => setOrder([...order, 'Tea'])}>Add to order</button>
                        <p className={styles.item}>Matcha</p>
                        <button className={styles.order} onClick={() => setOrder([...order, 'Matcha'])}>Add to order</button>
                        <p className={styles.item}>Turmeric Latte</p>
                        <button className={styles.order} onClick={() => setOrder([...order, 'Turmeric'])}>Add to order</button>
                        <p className={styles.item}>Hot Chocolate</p>
                        <button className={styles.order} onClick={() => setOrder([...order, 'Hot Chocolate'])}>Add to order</button>
                    </div>
                </div> 
            <h2 className={styles.item}>food</h2>
            <div className={styles.menuFull}>
                <div className={styles.right}>
                    <p className={styles.item}>English Muffin</p>
                    <button className={styles.order} onClick={() => setOrder([...order, 'English Muffin'])}>Add to order</button>
                </div>
                <div className='this is an empty div for spacing'>       </div>
                    <div className={styles.left}>
                        <p className={styles.item}>Lemon-Raspberry Scone</p>
                        <button className={styles.order} onClick={() => setOrder([...order, 'Lemon-Raspberry Scone'])}>Add to order</button>
                    </div>
                </div>
            <h2 className={styles.item} id={styles.byTheBag}>by the bag</h2>
            <div className={styles.menuFull}>
                <div className={styles.right2}>
                    <p></p>
                    <p className={styles.item}>Little Wolf</p>
                    <p className={styles.origin}>Laayyoo, Ethopia</p>
                    <button className={styles.order} onClick={() => setOrder([...order, 'Little Wolf'])}>Add to Order</button>
                    <p className={styles.origin}>notes:</p>
                    <p className={styles.origin}>peach,</p>
                    <p className={styles.origin}>lychee,</p>
                    <p className={styles.origin}>floral</p>
                </div>
                <div className='this is an empty div for spacing'>       </div>
                    <div className={styles.left2}>
                        <p></p>
                        <p className={styles.item}>Coptic Light</p>
                        <p className={styles.origin}>Las Palmas, El Salvador</p>
                        <button className={styles.order} onClick={() => setOrder([...order, 'Coptic Light'])}>Add to Order</button>
                        <p className={styles.origin}>notes:</p>
                        <p className={styles.origin}> milk chocolate,</p>
                        <p className={styles.origin}>candied pecan,</p>
                        <p className={styles.origin}>caramel</p>
                </div>
            </div>
        </div>
    )
}