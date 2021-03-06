import './Presentation.css'
import img_avatar from './avatar.svg'

export const Presentation = () => {
    return (
        <section aria-label='Presentation' id='presentation' className='presentation'>
            <div className='presentation__container'>
                <h1>Hi! i'm Bryan Vicente, web developer.</h1>
                <p>I am passionate about technology,improve my skills , get new knowledge continuously, and build  the bests websites with good practics.</p>
                <div className='presentation__buttons'>
                    <a rel='external' className='button button-presentation' href='https://github.com/bavicente9/portfolio/blob/master/public/resume/resume-Bryan_Vicente.pdf' >Resume</a>
                    <a rel='external' className='button button-presentation' href='https://github.com/bavicente9' >GitHub</a>
                </div>
                <div className='presentation__avatar'>
                    <img alt='' src={img_avatar} />
                </div>
            </div>
        </section>
    )
}