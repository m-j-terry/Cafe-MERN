import styles from './MenuListItem.module.scss' 

export default function MenuListItem({ menuItem, handleAddToOrder }) {
    return (
        <div className={styles.MenuListItem}>
        <div><img src={menuItem.imageUrl} height='75px'/></div>
        <div className={styles.name}>{menuItem.name}</div>
        <div className={styles.buy}>
            <span>${menuItem.price.toFixed(2)}</span>
            <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
            ADD
            </button>
        </div>
        </div>
    ) 
}