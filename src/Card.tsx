import './Card.css';

interface CardProps {
  value: (number | undefined),
  style?: Object
}

function Card(props: CardProps) {
  const valueClasses = ['top left', 'top right', 'bottom right', 'bottom left'];
  return (
    <div className="Card" style={props.style}>
      {valueClasses.map((classes, index) => <div className={`Card-value ${classes}`} key={index}>{props.value}</div>)}
    </div>
  )
}

export default Card;
