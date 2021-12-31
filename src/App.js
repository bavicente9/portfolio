
import './App.css';
import { Header } from './components/header/Header';

const App =()=> {
  return (
    <div className="App">
        <Header />
        <div className='presentation'>Presentation</div>
        <div className='projects'>Projects</div>
        <div className='skills'>Skills</div>
        <div className='contact'>Contact</div>
    </div>
  );
}

export default App;
