import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/Nav/Nav'
import Home from '../Home/Home'
import Account from '../Account/Account'

export default function App() {
    const [user, setUser] = useState(getUser())
    const [order, setOrder] = useState([])
    const [orderItem, setOrderItem] = useState([])
    const [checkout, setCheckout] = useState(false)
    const [account, setAccount] = useState(false)
    useEffect(function() {
        localStorage.clear()
    }, [])

    useEffect(function(){
        console.log(account)
    }, [account])

    useEffect(function(){
        console.log(user)
    }, [user])
    return (
        <main>
            <div>
                <NavBar 
                    setOrderItem={setOrderItem}
                    setAccount={setAccount}
                />
            </div>
            { account === true ?
                <>
                {user ?
                <Account /> 
                :
                <AuthPage />}
                </>
                :
                orderItem.length === 0 ? 
                    <Home 
                        orderItem={orderItem}
                        setOrderItem={setOrderItem}
                    />
                    : 
                    user ?
                        (checkout === false ?
                            <NewOrderPage 
                                orderItem={orderItem}
                                setCheckout={setCheckout}
                            />
                            :
                            <OrderHistoryPage />)       
                            :
                            <AuthPage setUser={setUser} />
                }
        </main>
    )
}

// export default function App() {
//     const [user, setUser] = useState(getUser())
//     return (
//         <main>
//         {/* <main className={styles.main}> */}
//             { user ? 
//             <>
//                 <Routes>
//                     <Route path='/orders/new' element={<NewOrderPage user={user} setUser={setUser} /> } />
//                     <Route path='/orders' element={<OrderHistoryPage user={user} setUser={setUser} /> } /> 
//                     <Route path='/*' elememt={<Navigate to='/orders/new' /> } />
//                 </Routes>
//             </>
//             :
//             <AuthPage setUser={setUser} />
//             }
//         </main>
//     )
// }