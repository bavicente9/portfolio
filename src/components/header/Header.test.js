import { Header } from "./Header"
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Testing Header', () => {

    it('renders correctly', () => {
        const { asFragment } = render(<Header />)
        expect(asFragment()).toMatchSnapshot()
    })

    it('responsive menu: open and close', () => {

        render(<Header></Header>)

        const rMenuOptions = screen.getByRole('menu')
        const hamburgerMenu = screen.getByRole('button');

        //check if the  hamburger button menu works correctly      
        //show options
        userEvent.click(hamburgerMenu)
        expect(rMenuOptions.classList.contains('header__rMenu--open')).toBe(true)
        //hidde options
        userEvent.click(hamburgerMenu)
        expect(rMenuOptions.classList.contains('header__rMenu--open')).toBe(false)
        expect(rMenuOptions.classList.contains('header__rMenu--close')).toBe(true)
    })
})