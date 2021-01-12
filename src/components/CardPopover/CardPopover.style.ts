import styled from 'styled-components';
import { MdFileDownload, MdPrint, MdDelete } from 'react-icons/md';

const CardPopoverStyle = styled.div`
  position: absolute;
  right: 0;
  padding: 10px 0;
  top: 15px;
  background-color: white;
  box-shadow: 0px 1px 50px 0px rgb(50, 50, 93, 0.07);
  border: 1px solid #f1f4f6;
  border-radius: 5px;
  width: 150px;
  height: 110px;
  transform: translateX(calc(100% - 10px));
  z-index: 500;
  display: flex;
  flex-direction: column;
`;

const DownloadIcon = styled(MdFileDownload)`
  margin-right: 15px;
`;

const DeleteIcon = styled(MdDelete)`
  margin-right: 15px;
  color: #eb5757;
`;

const PrintIcon = styled(MdPrint)`
  margin-right: 15px;
`;

const CardPopoverText = styled.p`
  user-select: none;
  font-size: 16px;
  font-family: 'Avenir', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

const CardPopoverItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
  height: 30px;
  color: #0f2137;
  &:hover {
    background: #b05efd;
    color: white;
  }

  &:hover ${DeleteIcon} {
    color: white;
  }
`;

export {
  CardPopoverStyle,
  CardPopoverItemWrapper,
  DownloadIcon,
  DeleteIcon,
  PrintIcon,
  CardPopoverText,
};
