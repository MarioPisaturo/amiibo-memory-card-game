import './App.scss';
import Gameboard from './components/gameboard/gameboard';

function App() {
  return (
    <div className="app">
      <div className="app-gameboard">
        <p>Welcome to Amiboo memory card game!</p>
        <Gameboard id={1} type={'random'}></Gameboard>
      </div>
    </div>
  );
}

export default App;
