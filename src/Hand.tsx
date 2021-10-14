import './Hand.css';
import Card from './Card';

interface HandProps {
  values: number[],
  handleCardClick(e: Object): any
};

function Hand(props: HandProps) {
  return (
    <div className="Hand">
      {props.values.map((value, index) => <Card value={value} key={index} handleClick={props.handleCardClick}/>)}
    </div>
  );
}

export default Hand;