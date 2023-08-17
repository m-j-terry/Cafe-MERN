import { useState, useEffect } from 'react'
import PreviousOrder from './PreviousOrder'
import * as ordersAPI from '../../utilities/order-api' 


export default function PreviousOrders({
    order,
    setOrder,
    orders,
    setOrders,
    PreviousOrder
}) {
    let previousOrders
    useEffect(function () {
        async function fetchOrderHistory() {
            const fetchOrders = await ordersAPI.getOrderHistory()
            const fetchedOrders = [fetchOrders[0], fetchOrders[1], fetchOrders[2]]
            setOrders(fetchOrders)
            if (fetchOrders.length > 0) {
                return previousOrders = fetchOrders.map(order =>
                <PreviousOrder
                    key={this._id}      //This might need some more work
                    lineItems={[lineItemSchema]}
                    button={<button onClick={() => setOrder(getOrder(this._id))}>order again</button>}
                />
                )
            } else {
                return ['No previous orders']
            }
        }
        fetchOrderHistory();
    }, []);
    return(
        <div className='PreviousOrders'>
            {previousOrders}
        </div>
    )
}