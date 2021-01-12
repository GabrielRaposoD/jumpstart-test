// Styles
import {
  DeleteIcon,
  DownloadIcon,
  PrintIcon,
  CardPopoverText,
  CardPopoverStyle,
  CardPopoverItemWrapper,
} from './CardPopover.style';

const CardPopover: React.FC = () => {
  return (
    <CardPopoverStyle>
      <CardPopoverItemWrapper>
        <DownloadIcon />
        <CardPopoverText>Download</CardPopoverText>
      </CardPopoverItemWrapper>
      <CardPopoverItemWrapper>
        <PrintIcon />
        <CardPopoverText>Print</CardPopoverText>
      </CardPopoverItemWrapper>
      <CardPopoverItemWrapper>
        <DeleteIcon />
        <CardPopoverText>Delete</CardPopoverText>
      </CardPopoverItemWrapper>
    </CardPopoverStyle>
  );
};

export default CardPopover;
