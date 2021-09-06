interface CardProps {
  value: number
}

function Card(props: CardProps) {
  return (
    <div>
      <div>{props.value}</div>
    </div>
  );
}

export default Card;