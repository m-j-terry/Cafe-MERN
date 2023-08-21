import { Link } from 'react-router-dom'
import styles from './Nav.module.scss'


const NavBar = ({ setOrderItem, setAccount }) => {
    function click1(){
        setOrderItem([])
        setAccount(false)
    }
    function click2(){
        setOrderItem([1])
        setAccount(false)
    }
    function click3(){
        setOrderItem([])
        setAccount(true)
    }
    
    return(
        <nav className={styles.NavBar}>
            <button onClick={() => click1()}><a href='#home'>home</a></button>
            <button onClick={() => click1()}><a href='#about'>about</a></button>
            <button onClick={() => click2()}>menu</button>
            <button onClick={() => click1()}><a href='#findUs'>find us</a></button>
            <button onClick={() => click1()}><a href='#contactUs'>contact us</a></button> 
            <button onClick={() => click3()}>account</button>
        </nav>
    )
}


// import { Link } from 'react-router-dom';

// const NavBar = props => {
// 	return (
// 		<nav className="NavBar">
// 			{props.routes.map(({ key, path }) => (
// 				<Link key={key} to={path}>
// 					{key}
// 				</Link>
// 			))}
// 		</nav>
// 	);
// };

export default NavBar;