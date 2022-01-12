import {render} from '@testing-library/react'
import { Cards } from './cards'

describe('Testing Projects', ()=>{
    const infoJson = JSON.parse(`[{
        "name": "project Name5",
        "image": "./images/maribelnails.png",
        "technologies": [
            "React",
            "JavaScript",
            "Css",
            "HTML"
        ],
        "description": "Here goes the project's description: exampmle: Netflix clone made using React and TMDB API. This app fetches the movies data from TMDB database. I have used plain CSS to style the components and make it look like the original Netflix website",
        "link_liveDemo": "https://github.com",
        "link_github": "https://github.com"
    }]`)

    it('renders correctly', ()=>{
        const {asFragment} = render(<Cards page={1} infoJson={infoJson} />)
        expect(asFragment()).toMatchSnapshot()
    })



})