import { Projects } from "./Projects"
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"

describe('Testing Projects', () => {
    const infoJson = JSON.parse(`[
        {
            "name": "project Name1",
            "image": "./images/maribelnails.png",
            "technologies": [
                "React",
                "JavaScript",
                "Css",
                "HTML"
            ],
            "description": "Here goes the project's description",
            "link_liveDemo": "https://github.com",
            "link_github": "https://github.com"
        },
        {
            "name": "project Name2",
            "image": "./images/maribelnails.png",
            "technologies": [
                "React",
                "JavaScript",
                "Css",
                "HTML"
            ],
            "description": "Here goes the project's description",
            "link_liveDemo": "https://github.com",
            "link_github": "https://github.com"
        },
        {
            "name": "project Name3",
            "image": "./images/maribelnails.png",
            "technologies": [
                "React",
                "JavaScript",
                "Css",
                "HTML"
            ],
            "description": "Here goes the project's description",
            "link_liveDemo": "https://github.com",
            "link_github": "https://github.com"
        }
        ,{
            "name": "project Name4",
            "image": "./images/maribelnails.png",
            "technologies": [
                "React",
                "JavaScript",
                "Css",
                "HTML"
            ],
            "description": "Here goes the project's description",
            "link_liveDemo": "https://github.com",
            "link_github": "https://github.com"
        }
     ]`)

    it('renders correctly', () => {
        const { asFragment } = render(<Projects infoJson={infoJson} />)
        expect(asFragment()).toMatchSnapshot()
    })

    it('render the correct nº of pages buttons', () => {
        render(<>
            <div id='skills'></div>
            <Projects infoJson={infoJson} />
        </>
        )
        const pagesBtns = document.getElementsByClassName('projects__navButton')
        expect(pagesBtns.length).toBe(2)
    })
    it('render the correct nº of cards', () => {
        render(<>
            <div id='skills'></div>
            <Projects infoJson={infoJson} />
        </>
        )
        const pageCards = document.getElementsByClassName('projects__card')
        expect(pageCards.length).toBe(3)
    })

    it('change rendered cards through the pages buttons', () => {
        //this line is cause jest in jsdom dont reconize the function: scrollIntoView
        window.HTMLElement.prototype.scrollIntoView = function() {};
        render(<>
            <Projects infoJson={infoJson} />
        </>
        )


        const pageBtn2 = document.getElementById('projects__navButton2')
        userEvent.click(pageBtn2)
        expect(screen.getByText('project Name4')).toBeInTheDocument()
    })

})