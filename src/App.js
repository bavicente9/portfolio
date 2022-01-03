
import './App.css';
import { Header } from './components/header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <section role='presentation' id='presentation' className='presentation'>Presentation</section>
        <section role = 'projects' id='projects' className='projects'>Projects</section>
        <section role='skills' id='skilss' className='skills'>Skills</section>
        <section role='contact' id='contact' className='contact'>Contact</section>
      </main>
    </div>
  );
}

export default App;
