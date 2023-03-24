import CardLink from "./CardLink";

interface Card {
  id: number;
  title: string;
  img: string;
  modal: boolean;
  descirption: string;
  links: CardLink[];
}

export default Card;
