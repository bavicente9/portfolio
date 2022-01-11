import { useEffect, useState } from 'react'
import './Projects.css'
import projectsInfo from './ProjectsInfo.json'



//return each card with its info according to the json
const generateCards = (page, infoJson) => {
    let cardsComponents = []
    for (let i = (page * 3 - 3); i < (page * 3); i++) {
        const item = infoJson[i]
        //check if there is not more items
        if (typeof item === 'undefined') break

        cardsComponents.push(
            <div key={i} className='projects__card'>
                <div className='projects__cardImage'>
                    <img alt='' src={item.image} />
                </div>
                <div className='projects__cardInfo'>
                    <h2>{item.name}</h2>
                    <ul className='projects__cardInfoTechnologies'>
                        {item.technologies.map((tech, index) => <li key={index}>{tech}</li>)}
                    </ul>
                    <p>{item.description}</p>
                    <nav className='projects__cardButtons' aria-label='project links'>
                        <a className='button' href={item.link_liveDemo} target="_blank">Live Demo</a>
                        <a className='button button--white' href={item.link_github} target="_blank">Github</a>
                    </nav>
                </div>
            </div>
        )
    }
    return (<>{cardsComponents}</>)

}

const generateNavButtons = (infoJson, handleChangePage) => {
    let buttonsComponents = []
    const nButtons = Math.ceil(infoJson.length / 3)

    //change the page and the button's state


    for (let i = 1; i <= nButtons; i++) {
        buttonsComponents.push(
            <button key={i} id={`projects__navButton${i}`} className='projects__navButton ' onClick={(e) => { handleChangePage(e.target.value) }} value={i}>{i}</button>
        )
    }

    return (<>{buttonsComponents}</>)
}


export const Projects = () => {
    const [page, setPage] = useState(1)
    const [btnSelected, setBtnSelected] = useState(1)

    //togle the class projects__navButton--selected 
    useEffect(() => {
        let prevButtonSelected = document.getElementsByClassName('projects__navButton--selected')
        let currentButtonSelected = document.getElementById(`projects__navButton${btnSelected}`)
        if (typeof prevButtonSelected[0] !== 'undefined') {
            prevButtonSelected[0].classList.remove('projects__navButton--selected')
        }
        currentButtonSelected.classList.add('projects__navButton--selected')
    }, [btnSelected])


    const handleChangePage = (value) => {
        setPage(value)
        setBtnSelected(value)
        document.getElementById('projects').scrollIntoView()
    }

    return (
        <section aria-label='projects' id='projects' className='projects'>
            <h1>Projects</h1>
            <div className='projects__container'>
                <div key={Math.random()} className='projects__cardsContainer'>
                    {generateCards(page, projectsInfo)}
                </div>
                <nav className='projects__nav' aria-label='Projects pages'>
                    {generateNavButtons(projectsInfo, handleChangePage)}
                </nav>
            </div>
        </section>
    )
}