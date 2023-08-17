import { Link } from 'react-router-dom'
import styles from './Nav.module.scss'
import { useState } from 'react'
import Hamlet from '../../components/Hamlet/Hamlet'
import About from '../../components/About/About'
import Menu from '../../components/Menu/Menu'
import FindUs from '../../components/FindUs/FindUs'
import ContactUs from '../../components/ContactUs/ContactUs'

const NavBar = (props) => {
    return(
        <nav className={styles.NavBar}>
            <button as="a" href='#Home'>home</button>
            <button as="a" href='#About'>about</button>
            <button as="a" href='#Menu'>menu</button>
            <button as="a" href='#FindUs'>find us</button>
            <button as="a" href='#ContactUs'>contact us</button> 
            <button>account</button>
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