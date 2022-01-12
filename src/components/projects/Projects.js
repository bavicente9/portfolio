import { useEffect, useState } from 'react'
import { Cards } from './cards/cards'
import './Projects.css'





const generateNavButtons = (infoJson, handleChangePage) => {
    let buttonsComponents = []
    const nButtons = Math.ceil(infoJson.length / 3)

    //change the page and the button's state
    for (let i = 1; i <= nButtons; i++) {
        buttonsComponents.push(
            <button key={i} id={`projects__navButton${i}`} className='projects__navButton ' 
            onClick={(e) => { handleChangePage(e.target.value) }} value={i}>{i}</button>
        )
    }

    return (<>{buttonsComponents}</>)
}


export const Projects = ({infoJson}) => {
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
                    <Cards page = {page} infoJson = {infoJson} />
                </div>
                <nav className='projects__nav' aria-label='Projects pages'>
                    {generateNavButtons(infoJson, handleChangePage)}
                </nav>
            </div>
        </section>
    )
}