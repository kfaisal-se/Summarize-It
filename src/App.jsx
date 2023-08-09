import Intro from './Components/Intro';
import Demo from './Components/Demo';
import './App.css';

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Intro />
        <Demo />
      </div>
    </main>
  )
}

export default App