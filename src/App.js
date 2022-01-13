
import './App.css';
import { Contact } from './components/contact/Contact';
import { Header } from './components/header/Header';
import { Presentation } from './components/presentation/Presentation';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';
import projectsInfo from './json/ProjectsInfo.json'
import skillsInfo from './json/Skills.json'
import contactInfo from './json/ContactInfo.json'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Presentation />
        <Projects infoJson={projectsInfo} />
        <Skills infoJson={skillsInfo} />
        <Contact infoJson={contactInfo} />
      </main>
    </div>
  );
}

export default App;
