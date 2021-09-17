import './Card.css';

interface CardProps {
  value: number
}

function Card(props: CardProps) {
  const valueClasses = ['top left', 'top right', 'bottom right', 'bottom left'];
  return (
    <div className="Card">
      {valueClasses.map(classes => <div className={`Card-value ${classes}`}>{props.value}</div>)}
    </div>
  )
}

export default Card;
