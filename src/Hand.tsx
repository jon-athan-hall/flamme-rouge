import './Hand.css';
import Card from './Card';

interface HandProps {
  values: number[]
};

function Hand(props: HandProps) {
  return (
    <div className="Hand">
      {props.values.map((value, index) => <Card value={value} key={index} />)}
    </div>
  );
}

export default Hand;