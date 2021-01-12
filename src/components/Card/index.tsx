// Modules
import { useState } from 'react';

//Styles
import {
  CardButton,
  CardDescription,
  CardIcon,
  CardIconWrapper,
  CardStyle,
  CardTitle,
} from './card.style';

// Interfaces
import { CardProps } from './types';

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <CardStyle>
      <CardIconWrapper>
        <CardIcon src='/img/card_icon.png' />
      </CardIconWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton>View document</CardButton>
    </CardStyle>
  );
};

export default Card;
