import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import styles from './App.module.scss';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/Nav/Nav'
// import Hamlet from '../../components/Hamlet/Hamlet'
// import About from '../../components/About/About'
// import Menu from '../../components/Menu/Menu'
// import FindUs from '../../components/FindUs/FindUs'
// import ContactUs from '../../components/ContactUs/ContactUs'
import Home from '../Home/Home'

export default function App() {
    const [user, setUser] = useState(getUser())
    const [order, setOrder] = useState([])
    const [orders, setOrders] = useState([])
    return (
        <main className=/*{styles.App}*/'main'>
            <div className=/*{styles.Nav}*/'Nav'>
                <NavBar />
            </div>
            { order.length === 0 ? 
                <Home 
                    order={order}
                    setOrder={setOrder}
                    orders={orders}
                    setOrders={setOrders}
                />
                : 
                user ? 
                    <NewOrderPage />
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