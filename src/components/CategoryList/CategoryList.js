import styles from './CategoryList.css' //scss?

export default function CategoryList({ categories, activeCat, setActiveCat }) {
    const cats = categories.map(cat => 
        <li
            key={cat}
            className={cat === activeCat ? styles.active : ''}
        >
            {cat}
        </li>
    )
    return (
        <ul> className={styles.CategoryList}
            {cats}
        </ul>
    )
}
