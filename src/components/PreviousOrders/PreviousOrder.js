export default function PreviousOrder( MenuListItem, handleAddToOrder ) {
    return (
        <div className={'MenuListItem'}>
        <div className={styles.image + ' ' + 'flex-ctr-ctr'}>{menuItem.image}</div>
        <div className={'name'}>{menuItem.name}</div>
        <div className={styles.buy}>
            <span>${menuItem.price.toFixed(2)}</span>
            <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
            Order Again
            </button>
        </div>
        </div>
    )
}