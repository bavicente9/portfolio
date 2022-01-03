import { render, screen } from '@testing-library/react'
import { Presentation } from "./presentation"


describe('Section: Presentation', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<Presentation />)
        expect(asFragment()).toMatchSnapshot()
    })
})