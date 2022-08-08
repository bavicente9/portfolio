import './Presentation.css'
import img_avatar from './avatar.svg'
import contactJson from '../../json/ContactInfo.json'

export const Presentation = () => {
    return (
        <section aria-label='Presentation' id='presentation' className='presentation'>
            <div className='presentation__container'>
                <h1>Hi! i'm Bryan Vicente, web developer.</h1>
                <p>I am passionate about technology,improve my skills , get new knowledge continuously, and build  the bests websites with good practics.</p>
                <div className='presentation__buttons'>
                    <a rel='external' className='button button-presentation' href={contactJson.links.resume} >Resume</a>
                    <a rel='external' className='button button-presentation' href={contactJson.links.github} >GitHub</a>
                </div>
                <div className='presentation__avatar'>
                    <img alt='' src={img_avatar} />
                </div>
            </div>
        </section>
    )
}