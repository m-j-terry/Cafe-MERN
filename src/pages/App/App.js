import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
    const [user, setUser] = useState(getUser())
    return (
        <main className={styles.App}>
            { user ? 
            <>
                <Routes>
                    <Route path='/orders/new' element={<NewOrderPage user={user} setUser={setUser} /> } />
                    <Route path='/orders' element={<OrderHistoryPage user={user} setUser={setUser} /> } /> 
                    <Route path='/*' elememt={<Navigate to='/orders/new' /> } />
                </Routes>
            </>
            :
            <AuthPage setUser={setUser} />
            }
        </main>
    )
}