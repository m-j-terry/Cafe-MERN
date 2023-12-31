import { useState, useEffect, useRef } from 'react' 
import * as itemsAPI from '../../utilities/items-api' 
import * as ordersAPI from '../../utilities/orders-api' 
import styles from './NewOrderPage.module.scss' 
import { Link, useNavigate } from 'react-router-dom' 
import MenuList from '../../components/MenuList/MenuList' 
import CategoryList from '../../components/CategoryList/CategoryList' 
import OrderDetail from '../../components/OrderDetail/OrderDetail' 
import UserLogOut from '../../components/UserLogOut/UserLogOut' 

export default function NewOrderPage({ user, setUser, orderItem, setCheckout }) {
    const [menuItems, setMenuItems] = useState([]) 
    const [activeCat, setActiveCat] = useState('') 
    const [cart, setCart] = useState(null) 
    const categoriesRef = useRef([]) 
    const navigate = useNavigate() 

    useEffect(function() {
        async function getItems() {
            const items = await itemsAPI.getAll() 
            categoriesRef.current = items.reduce((cats, item) => {
                const cat = item.category.name 
                return cats.includes(cat) ? cats : [...cats, cat] 
            }, []) 
            setMenuItems(items) 
            setActiveCat(categoriesRef.current[0]) 
            console.log('menu = ' + items)
        }
        getItems() 
        async function getCart() {
        const cart = await ordersAPI.getCart() 
        setCart(cart) 
        }
        getCart() 
        async function checkItem(){
            const item = await itemsAPI.getById(orderItem)
            item ? handleAddToOrder(orderItem) : console.log('not an item')

        }
        checkItem()
    }, []) 

    /*--- event handlers ---*/
    async function handleAddToOrder(itemId) {
        const updatedCart = await ordersAPI.addItemToCart(itemId)
        setCart(updatedCart)
    }

    async function handleChangeQty(itemId, newQty) {
        console.log(newQty)
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty)
        setCart(updatedCart)
    }

    async function handleCheckout() {
        await ordersAPI.checkout() 
        setCheckout(true)
    }

    return (
        <main className={styles.NewOrderPage}>
            <aside>
                <h1 className='title'>hamlet</h1>
                <h2 className='title'>coffee company</h2>
                <CategoryList
                categories={categoriesRef.current}
                cart={setCart}
                setActiveCat={setActiveCat}
                />
                <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
                <UserLogOut user={user} setUser={setUser} />
            </aside>
            <MenuList
                menuItems={menuItems.filter(item => item.category.name === activeCat)}
                handleAddToOrder={handleAddToOrder}
            />
            <OrderDetail
                order={cart}
                handleChangeQty={handleChangeQty}
                handleCheckout={handleCheckout}
            />
        </main>
    ) 
}