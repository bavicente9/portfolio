import './Skills.css'


export const Skills = ({ infoJson }) => {

    return (
        <section aria-label='skills' id='skills' className='skills'>
            <h1>Technologies</h1>
            <ul className='skills__container' aria-label='list of skills'>
                {
                    //generate the skills
                    infoJson.map((item, index) => {
                        return (
                            <li key={index} className='skills__item'>
                                <span className='skills__itemImg'><img alt='' src={item.img} /></span>
                                <p className='skills__itemName'>{item.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
