import './Projects.css'


export const Projects = () => {

    return (
        <section aria-label='projects' id='projects' className='projects'>
            <h1>Projects</h1>
            <div className='projects__container'>
                <div className='projects__cardsContainer'>

                    <div className='projects__card'>
                        <div className='projects__cardImage'>
                            <img alt='' src='./images/maribelnails.png' />
                        </div>
                        <div className='projects__cardInfo'>
                            <h2>project name</h2>
                            <ul className='projects__cardInfoTechnologies'>
                                <li>react</li>
                                <li>JavaScript</li>
                                <li>Css</li>
                                <li>HTML</li>
                            </ul>
                            <p>Here goes the project's description: exampmle: Netflix clone made using React and TMDB API.
                                This app fetches the movies data from TMDB database. I have used plain CSS to style the components
                                and make it look like the original Netflix website
                            </p>
                            <div className='projects__cardButtons'>
                                <a className='button' href=''>Live Demo</a>
                                <a className='button button--white' href=''>Github</a>
                            </div>
                        </div>
                    </div>



                </div>
                <nav className='projects__nav' aria-label='Projects pages'>
                    <button className='projects__navButton projects__navButton--selected ' value={1}>1</button>
                    <button className='projects__navButton ' value={2}>2</button>
                    <button className='projects__navButton ' value={3}>3</button>
                </nav>
            </div>
        </section>
    )
}