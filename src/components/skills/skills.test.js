import { Skills } from "./Skills"
import { render } from '@testing-library/react'

describe('Skills', () => {
    const infoJson = JSON.parse(`
    [{
        "name": "React",
        "img": "./images/icons/icon_react1.svg"
    },
    {
        "name": "JavaScript",
        "img": "./images/icons/icon_javaScript.svg"
    },
    {
        "name": "CSS",
        "img": "./images/icons/icon_css.svg"
    }]`
    )

    it('renders correctly', () => {
        const { asFragment } = render(<Skills infoJson={infoJson} />)
        expect(asFragment()).toMatchSnapshot()
    })
})