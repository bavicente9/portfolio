
import './App.css';
import { Header } from './components/header/Header';
import { Presentation } from './components/presentation/Presentation';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';
import projectsInfo from './json/ProjectsInfo.json'
import skillsInfo from './json/Skills.json'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Presentation />
        <Projects infoJson={projectsInfo} />
        <Skills infoJson={skillsInfo} />
        <section aria-label='contact' id='contact' className='contact'>
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
