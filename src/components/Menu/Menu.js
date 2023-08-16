import { useState } from 'react'

export default function Menu({
    order, 
    setOrder
}) {
    let newOrder
    return(
        <div className='Menu' data-color='tan'>
            <h1 className='title'>Menu</h1>
            <h2 className='item'>coffee & tea</h2>
            <div className='menu-full'>
                <div className='menu'>
                    <p className='item'>Espresso</p>
                    <button className='order' onClick={() => { newOrder = [...order, 'Espresso']; setOrder(newOrder) }}>Add to order</button>
                    <p className='par'>Macchiato</p>
                    <button className='order' onClick={() => setOrder([...order, 'Machiato'])}>Add to order</button>
                    <p className='item'>Cortado</p>
                    <button className='order' onClick={() => setOrder([...order, 'Cortado'])}>Add to order</button>
                    <p className='item'>Latte</p>
                    <button className='order' onClick={() => setOrder([...order, 'Latte'])}>Add to order</button>
                    <p className='item'>Mocha</p>
                    <button className='order' onClick={() => setOrder([...order, 'Mocha'])}>Add to order</button>
                </div>
                <div className='this is an empty div for spacing'></div>
                    <div className='menu'>
                        <p className='item'>Drip</p>
                        <button className='order' onClick={() => setOrder([...order, 'Drip'])}>Add to order</button>
                        <p className='item'>Tea</p>
                        <button className='order' onClick={() => setOrder([...order, 'Tea'])}>Add to order</button>
                        <p className='item'>Matcha</p>
                        <button className='order' onClick={() => setOrder([...order, 'Matcha'])}>Add to order</button>
                        <p className='item'>Turmeric Latte</p>
                        <button className='order' onClick={() => setOrder([...order, 'Turmeric'])}>Add to order</button>
                        <p className='item'>Hot Chocolate</p>
                        <button className='order' onClick={() => setOrder([...order, 'Hot Chocolate'])}>Add to order</button>
                    </div>
                </div> 
            <h2 className='item'>food</h2>
            <div className='menu-full'>
                <div className='menu'>
                    <p className='item'>English Muffin</p>
                    <button className='order' onClick={() => setOrder([...order, 'English Muffin'])}>Add to order</button>
                </div>
                <div className='this is an empty div for spacing'>       </div>
                    <div className='menu'>
                        <p className='item'>Lemon-Raspberry Scone</p>
                        <button className='order' onClick={() => setOrder([...order, 'Lemon-Raspberry Scone'])}>Add to order</button>
                    </div>
                </div>
            <h2 className='item'>by the bag</h2>
            <div className='menu-full'>
                <div className='menu2'>
                    <p></p>
                    <p className='item'>Little Wolf</p>
                    <p className='origin'>Laayyoo, Ethopia</p>
                    <button className='order' onClick={() => setOrder([...order, 'Little Wolf'])}>Add to Order</button>
                    <p className='origin'>notes:</p>
                    <p className='origin'>peach,</p>
                    <p className='origin'>lychee,</p>
                    <p className='origin'>floral</p>
                </div>
                <div className='this is an empty div for spacing'>       </div>
                    <div className='menu2'>
                        <p></p>
                        <p className='item'>Coptic Light</p>
                        <p className='origin'>Las Palmas, El Salvador</p>
                        <button className='order' onClick={() => setOrder([...order, 'Coptic Light'])}>Add to Order</button>
                        <p className='origin'>notes:</p>
                        <p className='origin'> milk chocolate,</p>
                        <p className='origin'>candied pecan,</p>
                        <p className='origin'>caramel</p>
                </div>
            </div>
        </div>
    )
}