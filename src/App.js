
import './App.css';
import { Header } from './components/header/Header';
import { Presentation } from './components/presentation/Presentation';
import { Projects } from './components/projects/Projects';
import projectsInfo from './json/ProjectsInfo.json'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Presentation />
        <Projects infoJson = {projectsInfo} />
        <section aria-label='skills'   id='skills'   className='skills'>Skills</section>
        <section aria-label='contact'  id='contact' className='contact'>Contact</section>
      </main>
    </div>
  );
}

export default App;
