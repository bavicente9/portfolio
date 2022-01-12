
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
        <Projects infoJson = {projectsInfo} />
        <Skills infoJson = {skillsInfo}/>
        <section aria-label='contact'  id='contact' className='contact'>Contact</section>
      </main>
    </div>
  );
}

export default App;
