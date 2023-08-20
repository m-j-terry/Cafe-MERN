import styles from './menu.module.scss'
import * as itemsAPI from'../../utilities/items-api'
const { Item } = require('../../../models/item')

export default function menu({ setOrderItem }) {
    async function startOrder(itemName){
        try {
            // Pseudocode: send a get request to /api/items/name/:name

            const foundItem = await itemsAPI.getByName(itemName)

            if (foundItem._id) {
                setOrderItem(foundItem._id)
                // setOrder(itemName)
            } else {
                console.log('item not found')
                return null
            }
        } catch(error) {
            console.log(`error = ${error}`)
        }
    }
    return(
        <div className={styles.Menu} data-color='tan'>
            <h1 className='title'>menu</h1>
            <h2 className={styles.item}>coffee & tea</h2>
            <div className={styles.menuFull}>
                <div className={styles.right}>
                    <p className={styles.item}>Espresso</p>
                    <button className={styles.order} onClick={() => startOrder('Espresso')}>Add to order</button>
                    <p className={styles.item}>Macchiato</p>
                    <button className={styles.order} onClick={() => startOrder('Macchiato')}>Add to order</button>
                    <p className={styles.item}>Cortado</p>
                    <button className={styles.order} onClick={() => startOrder('Cortado')}>Add to order</button>
                    <p className={styles.item}>Latte</p>
                    <button className={styles.order} onClick={() => startOrder('Latte')}>Add to order</button>
                    <p className={styles.item}>Drip (small)</p>
                    <button className={styles.order} onClick={() => startOrder('Drip-Small')}>Add to order</button>
                    <p className={styles.item}>Drip (medium)</p>
                    <button className={styles.order} onClick={() => startOrder('Drip-Medium')}>Add to order</button>
                    <p className={styles.item}>Drip (large)</p>
                    <button className={styles.order} onClick={() => startOrder('Drip-Large')}>Add to order</button>
                    <p className={styles.item}>Tea</p>
                    <button className={styles.order} onClick={() => startOrder('Tea')}>Add to order</button>
                </div>
                <div className='this is an empty div for spacing'></div>
                <div className={styles.left}>
                <p className={styles.item}>Mocha (small)</p>
                    <button className={styles.order} onClick={() => startOrder('Mocha-Small')}>Add to order</button>
                    <p className={styles.item}>Mocha (large)</p>
                    <button className={styles.order} onClick={() => startOrder('Mocha-Large')}>Add to order</button>
                    <p className={styles.item}>Matcha (small)</p>
                    <button className={styles.order} onClick={() => startOrder('Matcha-Small')}>Add to order</button>
                    <p className={styles.item}>Matcha (large)</p>
                    <button className={styles.order} onClick={() => startOrder('Matcha-Large')}>Add to order</button>
                    <p className={styles.item}>Turmeric Latte (small)</p>
                    <button className={styles.order} onClick={() => startOrder('Turmeric-Latte-Small')}>Add to order</button>
                    <p className={styles.item}>Turmeric Latte (large)</p>
                    <button className={styles.order} onClick={() => startOrder('Turmeric-Latte-Large')}>Add to order</button>
                    <p className={styles.item}>Hot Chocolate (small)</p>
                    <button className={styles.order} onClick={() => startOrder('Hot-Chocolate-Small')}>Add to order</button>
                    <p className={styles.item}>Hot Chocolate (large)</p>
                    <button className={styles.order} onClick={() => startOrder('Hot-Chocolate-Large')}>Add to order</button>
                </div>
            </div> 
            <h2 className={styles.item}>food</h2>
            <div className={styles.menuFull}>
                <div className={styles.right}>
                    <p className={styles.item}>English Muffin</p>
                    <button className={styles.order} onClick={() => startOrder('English-Muffin')}>Add to order</button>
                </div>
                <div className='this is an empty div for spacing'>       </div>
                    <div className={styles.left}>
                        <p className={styles.item}>Lemon-Raspberry Scone</p>
                        <button className={styles.order} onClick={() => startOrder('Lemon-Raspberry-Scone')}>Add to order</button>
                    </div>
                </div>
            <h2 className={styles.item} id={styles.byTheBag}>by the bag</h2>
            <div className={styles.menuFull}>
                <div className={styles.right2}>
                    <p></p>
                    <p className={styles.item}>Little Wolf</p>
                    <p className={styles.origin}>Laayyoo, Ethopia</p>
                    <button className={styles.order} onClick={() => startOrder('Little-Wolf')}>Add to Order</button>
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
                        <button className={styles.order} onClick={() => startOrder('Coptic-Light')}>Add to Order</button>
                        <p className={styles.origin}>notes:</p>
                        <p className={styles.origin}> milk chocolate,</p>
                        <p className={styles.origin}>candied pecan,</p>
                        <p className={styles.origin}>caramel</p>
                </div>
            </div>
        </div>
    )
}