import Deck from './Deck';
import Hand from './Hand';

/*
interface DeckManagerProps {
  deck: number[],
  discard: number[],
  hand: number[]
}
*/

function CardManager() {
  return (
    <div className="CardManager">
      <Deck size={15} />
      <Hand values={[5, 3, 4, 2]} />
    </div>
  );
}

export default CardManager;