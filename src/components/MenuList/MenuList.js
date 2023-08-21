import { useState, useEffect } from "react"
import styles from './MenuList.module.scss' 
import MenuListItem from '../MenuListItem/MenuListItem' 

export default function MenuList({ menuItems, handleAddToOrder }) {
    // const [pageNumber, setPageNumber] = useState(1)
    // const [x, setX] = useState(2)
    // const [y, setY] = useState(0)
    // const [numOfPages, setNumOfPages] = useState(0)

    // let itemsSpliced = menuItems.splice((pageNumber - 1) * 5, pageNumber * 5).map(item =>
    //     <MenuListItem
    //         key={item._id}
    //         handleAddToOrder={handleAddToOrder}
    //         menuItem={item}
    //     />
    // )

    // useEffect(() => {
    //     // itemsSpliced = menuItems.splice((pageNumber - 1) * 5, pageNumber * 5).map(item =>
    //     //     <MenuListItem
    //     //         key={item._id}
    //     //         handleAddToOrder={handleAddToOrder}
    //     //         menuItem={item}
    //     //     />
    //     // )
    //     setNumOfPages(Math.ceil(menuItems.length / 5))
    //     console.log(itemsSpliced)
    //     console.log(numOfPages)
    // } , [pageNumber])
    
    const items = menuItems.map(item =>
        <MenuListItem
            key={item._id}
            handleAddToOrder={handleAddToOrder}
            menuItem={item}
        />
    )
    
    
    // function toggle() {
    //     if (numOfPages === 0) {
    //         return (
    //             <div>
    //                 <p>Page 1 of 1</p>
    //             </div>
    //         )
    //     } else if (pageNumber === 1) {
    //         <div>
    //             <p>Page {pageNumber} of {numOfPages}</p>
    //             <button onClick={() => setPageNumber(x) && setX(x++) && setY(y++)}>next page</button>
    //         </div>

    //     } else if (pageNumber === numOfPages) {
    //         <div>
    //             <button onClick={() => setPageNumber(y) && setX(x--) && setY(y--)}>previous page</button>
    //             <p>Page {pageNumber} of {numOfPages}</p>
    //         </div>
    //     } else {
    //         <div>
    //             <button onClick={() => setPageNumber(y) && setX(x--) && setY(y--)}>previous page</button>
    //             <p>Page {pageNumber} of {numOfPages}</p>
    //             <button onClick={() => setPageNumber(x) && setX(x++) && setY(y++)}>next page</button>
    //         </div>
    //     }
    // }
    return (
        <main className={styles.MenuList}>
            {items}
            {/* {toggle()} */}
        </main>
    ) 
}