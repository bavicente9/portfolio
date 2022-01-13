import './Contact.css'

export const Contact = ({infoJson}) => {
    //the form data is send to netlify.
    return (
        <section aria-label='contact' id='contact' className='contact'>
            <h1>Contact</h1>
            <div className='contact__container'>
                <div className='contact__personalMessage'>
                    <p>Feel free to send me a message, i,ll reply you as soon as possible.</p>
                    <div className='contact__socialMedia'>
                        <label><b>Email: </b>{infoJson.email}</label>
                      <div className='contact__socialMediaLinks'>
                        <a rel='external' href={infoJson.links.github} aria-label='github' className='contact__socialMediaBtn contact__btnGithub' ></a>
                        <a rel='external' href={infoJson.links.linkedin} aria-label='linkedin' className='contact__socialMediaBtn contact__btnLinkedin' ></a>
                      </div>
                    </div>
                </div>
                <form className='contact__form' name="contact" method="POST" data-netlify="true">
                    <label>Name:<input type="text" name="name" placeholder='name'    required /></label>
                    <label>email:<input type="email" name="email" placeholder='email' required/></label>
                    <label>message:<textarea name="message" placeholder='message'required /></label>
                    <button type="submit" className='button button-form'>Send</button>
                </form>
            </div>
        </section >
    )
}