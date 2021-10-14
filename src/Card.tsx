import './Card.css';

interface CardProps {
  value: number,
  style?: Object,
  handleClick(value: number): any
}

function Card(props: CardProps) {
  const valueClasses = ['top left', 'top right', 'bottom right', 'bottom left'];
  return (
    <div className="Card" style={props.style} onClick={(e) => props.handleClick(props.value)}>
      {valueClasses.map((classes, index) => <div className={`Card-value ${classes}`} key={index}>{props.value}</div>)}
    </div>
  )
}

export default Card;
