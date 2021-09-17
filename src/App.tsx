import './App.css';
import Card from './Card';

function App() {
  const sprinteurDeck = [3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7];
  const rouleurDeck = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 9, 9, 9];

  return (
    <div className="App">
      <Card value={6} />
    </div>
  );
}

export default App;
