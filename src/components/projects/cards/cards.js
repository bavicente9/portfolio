import './cards.css'

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

                        {item.link_liveDemo ==='undefined'?null:<a rel='external' className='button' href={item.link_liveDemo} target="_blank">Live Demo</a>}
                        {item.link_github ==='undefined'?null:<a rel='external' className='button button--white' href={item.link_github} target="_blank">Github</a>}
                    </nav>
                </div>
            </div>
        )
    }
    return (<>{cardsComponents}</>)

}

export const Cards = ({page, infoJson})=>{
    return(<>{generateCards(page, infoJson)}</> )
}