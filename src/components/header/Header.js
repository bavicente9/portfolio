import './Header.css'

export const Header = () => {

    //toggle visibility of the resoponsive menu
    const handleToggleRMenu = () => {
        const rMenu = document.getElementById('header__rMenu')

        if (!rMenu.classList.contains('header__rMenu--open')) {

            rMenu.classList.remove('header__rMenu--close')
            rMenu.classList.add('header__rMenu--open')


        } else {
            rMenu.classList.remove('header__rMenu--open')
            rMenu.classList.add('header__rMenu--close')

        }



    }
    return (
        <header aria-label='header' className='header'>
            <div className='header__container'>
                <a rel='tag' aria-label='Contact me' className='button button--navbar' href='#contact'>Contact</a>

                <nav role='menubar' id='header__navbar' className='header__navbar'>
                    <ul>
                        <li className='navbar__item'><a rel='section' href='#presentation'>Home</a></li>
                        <li className='navbar__item'><a rel='section' href='#projects' >Projects</a></li>
                        <li className='navbar__item'><a rel='section' href='#skills'>Skills</a></li>
                    </ul>
                </nav>

                <button  aria-label='toggle menu options'
                    className='header__buttonMenu buttonMenu--hidden buttonMenu--visible-true buttonMenu--visible-false'
                    onClick={handleToggleRMenu}>
                </button>

            </div>
            <nav role='menu' className='header__rMenu ' id='header__rMenu' >
                <ul>
                    <li className='navbar__item'><a rel='section' onClick={handleToggleRMenu} href='#presentation'>Home</a></li>
                    <li className='navbar__item'><a rel='section' onClick={handleToggleRMenu} href='#projects' >Projects</a></li>
                    <li className='navbar__item'><a rel='section' onClick={handleToggleRMenu} href='#skills'>Skills</a></li>
                </ul>
            </nav>
        </header>
    )
}