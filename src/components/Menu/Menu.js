import styles from './menu.module.scss'
import * as itemsAPI from'../../utilities/items-api'
const { Item } = require('../../../models/item')

export default function menu({ setOrder }) {
    async function startOrder(itemName){
        try {
            // const foundItem = await Item.findOne({ name: itemName })
            // send a get request to /api/items/:name
            console.log(itemName)
            const foundItem = await itemsAPI.getByName(itemName)
            console.log('item = ' + foundItem)
            if (foundItem._id) {
                setOrder(foundItem._id)
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
                    <button className={styles.order} onClick={() => startOrder('Machiato')}>Add to order</button>
                    <p className={styles.item}>Cortado</p>
                    <button className={styles.order} onClick={() => startOrder('Cortado')}>Add to order</button>
                    <p className={styles.item}>Latte</p>
                    <button className={styles.order} onClick={() => startOrder('Latte')}>Add to order</button>
                    <p className={styles.item}>Mocha</p>
                    <button className={styles.order} onClick={() => startOrder('Mocha')}>Add to order</button>
                </div>
                <div className='this is an empty div for spacing'></div>
                    <div className={styles.left}>
                        <p className={styles.item}>Drip</p>
                        <button className={styles.order} onClick={() => startOrder('Drip')}>Add to order</button>
                        <p className={styles.item}>Tea</p>
                        <button className={styles.order} onClick={() => startOrder('Tea')}>Add to order</button>
                        <p className={styles.item}>Matcha</p>
                        <button className={styles.order} onClick={() => startOrder('Matcha')}>Add to order</button>
                        <p className={styles.item}>Turmeric Latte</p>
                        <button className={styles.order} onClick={() => startOrder('Turmeric')}>Add to order</button>
                        <p className={styles.item}>Hot Chocolate</p>
                        <button className={styles.order} onClick={() => startOrder('Hot Chocolate')}>Add to order</button>
                    </div>
                </div> 
            <h2 className={styles.item}>food</h2>
            <div className={styles.menuFull}>
                <div className={styles.right}>
                    <p className={styles.item}>English Muffin</p>
                    <button className={styles.order} onClick={() => startOrder('English Muffin')}>Add to order</button>
                </div>
                <div className='this is an empty div for spacing'>       </div>
                    <div className={styles.left}>
                        <p className={styles.item}>Lemon-Raspberry Scone</p>
                        <button className={styles.order} onClick={() => startOrder('Lemon-Raspberry Scone')}>Add to order</button>
                    </div>
                </div>
            <h2 className={styles.item} id={styles.byTheBag}>by the bag</h2>
            <div className={styles.menuFull}>
                <div className={styles.right2}>
                    <p></p>
                    <p className={styles.item}>Little Wolf</p>
                    <p className={styles.origin}>Laayyoo, Ethopia</p>
                    <button className={styles.order} onClick={() => startOrder('Little Wolf')}>Add to Order</button>
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
                        <button className={styles.order} onClick={() => startOrder('Coptic Light')}>Add to Order</button>
                        <p className={styles.origin}>notes:</p>
                        <p className={styles.origin}> milk chocolate,</p>
                        <p className={styles.origin}>candied pecan,</p>
                        <p className={styles.origin}>caramel</p>
                </div>
            </div>
        </div>
    )
}