import { useState } from 'react'
import Hamlet from '../../components/Hamlet/Hamlet'
import About from '../../components/About/About'
import Menu from '../../components/Menu/Menu'
import FindUs from '../../components/FindUs/FindUs'
import ContactUs from '../../components/ContactUs/ContactUs'
import PreviousOrders from '../../components/PreviousOrders/PreviousOrders'

export default function Home({
    order,
    setOrder, 
    orders, 
    setOrders
}) {
    return(
        <div className='Hamlet' id='Home'>
            <Hamlet />
            <PreviousOrders 
                orders={orders}
                setOrders={setOrders}
            />
            <div className='About' id='About'>
                <About />
            </div>
            <div className='Menu' id='Menu'>
                <Menu
                    order={order}
                    setOrder={setOrder}
                />
            </div>
            <div className='FindUs' id='FindUs'>
                <FindUs />
            </div>
            <div className='ContactUs' id='ContactUs'>
                <ContactUs />
            </div>
        </div>
    )
}