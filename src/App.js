import './App.css';
import AnimalSounds from './components/Animals';
import MyApp from './components/MyImage';

function App() {
  return (
    <div className="App">
      <h1>My animals</h1>
      {/* <MyApp></MyApp> */}
      <AnimalSounds></AnimalSounds>
    </div>
  );
}

export default App;
