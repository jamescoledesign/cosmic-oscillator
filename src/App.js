import './App.css';
import {synthTone} from './tones'
import example from './images/example.png'

function App() {
  return (
    <div className="App">
      <h1>Cosmic Oscillator</h1>
      <p>Sonification of astronomical imagery in the browser using computer vision from <a href='https://opencv.org/' target="_blank"> OpenCV</a> and synthesizers from <a href='https://tonejs.github.io/' target="_blank">ToneJS</a>.</p>
      <div className="image-container">
        <img className="loaded-image" src= {example} />
        <div className='caption'>
        Image:  
          <a href='https://webbtelescope.org/contents/media/images/2023/128/01H449193V5Q4Q6GFBKXAZ3S03' target="_blank"> Rho Ophiuchi</a>
        </div>
    </div>
    <button className='startButton' onClick={synthTone}>Click button to start sonification</button>
    <div className='caption'>(Note: this sounds best with headphones)</div>
    </div>
  );
}

export default App;
