// Modules
import { useState } from 'react';

//Styles
import {
  CardButton,
  CardDescription,
  CardStyle,
  CardTitle,
} from './card.style';

// Interfaces
import { CardProps } from './types';

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <CardStyle>
      {/* <div className={'card-image-container ' + styles.cardImageContainer}>
        <img
          className={'card-image ' + styles.cardImage}
          src={icon}
          alt='Card icon'
        />
      </div> */}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton>View document</CardButton>
    </CardStyle>
  );
};

export default Card;
