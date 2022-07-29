import './App.css';
import Celeb from './Celeb';
import GameBoard from './GameBoard';
import Header from './Header';
import Keyboard from './Keyboard';

function App() {

  return (
    <div className="app">
      <Header />
      <Celeb />
      <GameBoard />
      <Keyboard />
    </div>
  );
}

export default App;
