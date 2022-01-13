import { render } from '@testing-library/react';
import { Contact } from "./Contact"
describe('Skills', () => {
    const infoJson = JSON.parse( `{
        "email":"bavicente98@gmail.com",
        "links":{
            "github":"github.com",
            "linkedin":"linkedin.com"
        }   
    }`)
    it('renders correctly', () => {
        const { asFragment } = render(<Contact infoJson={infoJson}/>)
        expect(asFragment()).toMatchSnapshot()
    })
})