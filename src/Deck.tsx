import './Deck.css';

interface DeckProps {
  size: number
}

function Deck(props: DeckProps) {
  const sizeLabel = (props.size === 1) ? "card" : "cards";
  return (
    <section className="Deck">
      <p className="Deck-size">{props.size} {sizeLabel}</p>
    </section>
  );
}

export default Deck;