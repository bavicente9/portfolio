
import './App.css';
import { Header } from './components/header/Header';
import { Presentation } from './components/presentation/Presentation';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Presentation />
        <section aria-label='projects' id='projects' className='projects'>Projects</section>
        <section aria-label='skilss'   id='skilss'   className='skills'>Skills</section>
        <section aria-label='contact'  id='contact' className='contact'>Contact</section>
      </main>
    </div>
  );
}

export default App;
