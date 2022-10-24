import styled from 'styled-components';
import { device } from '../../../components/sizes';

const Content = styled.div`
  padding-left: 50px;
`;

const CustomButton = styled.button`
  display: flex;
  align-items: center;
  vertical-align: middle;
  border: none;
  border-radius: 5px;
  background-color: #0abb87;
  color: white;
  padding: 8px 10px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

const Table = styled.div`
  display: table;
  padding: 20px 0;
  width: 100%;

  @media ${device.laptop} {
    display: block;
    overflow-x: scroll;
    width: 100%;
  }
`;

const Heading = styled.div`
  display: table-header-group;
  font-weight: bold;
`;

const Row = styled.div`
  display: table-row;
  min-width: fit-content;
`;

const CellHeading = styled.span`
  display: table-cell;
  border: solid;
  border-width: thin;
  border: none;
  border-bottom: 2px solid #262d34;
  padding: 15px 30px 15px 30px;
  vertical-align: middle;
`;

const Cell = styled.span`
  display: table-cell;
  border: solid;
  border-width: thin;
  border: none;
  border-bottom: 0.5px solid #cdcdcd;
  padding: 15px 30px 15px 30px;
  vertical-align: middle;
  font-size: 13px;
  font-weight: 400;
  width: 20%;
`;

const IsOnlineBox = styled.div`
  padding: 5px 8px;
  background-color: #f0f4f3;
  border-radius: 10px;
  border: 1px solid #9e9e9e;
  width: fit-content;
  font-size: 10px;
  font-weight: 300;
`;

const PagButton = styled.button`
  vertical-align: middle;
  border: none;
  border-radius: 5px;
  background-color: #0abb87;
  padding: 8px 10px;
  color: white;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  &:disabled {
    opacity: 50%;
    cursor: default;
  }
`;

const OpacityModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  Content,
  Table,
  Heading,
  Cell,
  Row,
  CellHeading,
  CustomButton,
  PagButton,
  OpacityModal,
  IsOnlineBox,
};
