import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {

    return (
        <>
         <header className={ styles.header }>
            <Link to="/">
                <img src="https://image.tmdb.org/t/p/original/xhv9MgwuLwRkRZUokS1bEdXFt6E.png" alt="" />
                
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/personagens">Personagens</Link>
                <Link to="/serie">Série</Link>
            </nav>
        </header>
        
        </>
    )
}

export default Header