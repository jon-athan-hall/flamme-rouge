import './Played.css';
import Card from './Card';

interface PlayedProps {
  values: number[]
};

function Played(props: PlayedProps) {
  const playedCards = props.values.map((value, index) => {
    const cardStyle = {
      top: `${index * 2.5}em`,
      zIndex: index
    };
    return <Card value={value} key={index} style={cardStyle} handleClick={() => null}/>;
  });

  return (
    <div className="Played">
      {playedCards}
    </div>
  );
}

export default Played;