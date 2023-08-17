import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/Nav/Nav'
import Home from '../Home/Home'

export default function App() {
    const [user, setUser] = useState(getUser())
    const [order, setOrder] = useState([])
    return (
        <main>
            <div>
                <NavBar />
            </div>
            { order.length === 0 ? 
                <Home 
                    order={order}
                    setOrder={setOrder}
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