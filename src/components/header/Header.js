import './Header.css'
import icon_hamburger from './icon-hamburger.svg'

export const Header = () => {

    return (
        <div className='header'>
            <button alt='button contact' className='button button--navbar'>Contact</button>
            <nav className='header__navbar'>
                <ul>
                    <li className='navbar__item'><a>Home</a></li>
                    <li className='navbar__item'><a>Projects</a></li>
                    <li className='navbar__item'><a>Skills</a></li>
                </ul>
            </nav>

            <button alt='button menu' className='header__buttonMenu buttonMenu--hidden buttonMenu--visible-true buttonMenu--visible-false'>
                <img alt='' src={icon_hamburger}/>
            </button>
            <div className='header__rMenu header__rMenu--state-closed header__rMenu-state-open'>
                <ul>
                    <li className='navbar__item'><a>Contact</a></li>
                    <li className='navbar__item'><a>Home</a></li>
                    <li className='navbar__item'><a>Projects</a></li>
                    <li className='navbar__item'><a>Skills</a></li>
                </ul>
            </div>
        </div>
    )
}