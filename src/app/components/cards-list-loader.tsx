import CardLoader from "./card-loader";

const CardsListLoader = ({ numberOfCards }: { numberOfCards: number }) =>
  Array.from({ length: numberOfCards }, (_, index) => (
    <CardLoader key={index} />
  ));

export default CardsListLoader;
