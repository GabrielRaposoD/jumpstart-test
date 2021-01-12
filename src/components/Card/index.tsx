// Modules
import { useState } from 'react';

// Components
import { CardPopover } from '@components/index';

//Styles
import {
  CardButton,
  CardDescription,
  CardIcon,
  CardIconWrapper,
  CardStyle,
  CardTitle,
  MenuIcon,
  MenuIconWrapper,
} from './card.style';

// Interfaces
import { CardProps } from './types';

const Card: React.FC<CardProps> = ({ title, description }: CardProps) => {
  const [isHovering, setHovering] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <CardStyle
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false), setOpen(false);
      }}
    >
      {isHovering && (
        <MenuIconWrapper onClick={() => setOpen(!isOpen)}>
          <MenuIcon />
        </MenuIconWrapper>
      )}
      <CardIconWrapper>
        <CardIcon src='/img/card_icon.png' />
      </CardIconWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton>View document</CardButton>
      {isOpen && <CardPopover />}
    </CardStyle>
  );
};

export default Card;
