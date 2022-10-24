import { device } from 'apps/frontend/src/app/components/sizes';
import styled from 'styled-components';

const Modal = styled.div`
  background-color: white;
  height: auto;
  width: 500px;
  padding: 20px;
  border-radius: 5px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 70%;
`;

interface ContentProps {
  align?: string;
  padding?: string;
}

const ContentModal = styled.div<ContentProps>`
  padding: ${(props) => props.padding || '2px'};
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || 'left'};
  @media ${device.mobileM} {
    padding: 3px;
    /* width: 120%; */
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  margin: auto;
  width: 60%;
  border-bottom: 1px solid #cdcdcd;
  padding-top: 5px;
`;

const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  vertical-align: middle;
  padding: 2px;
`;

const FooterModal = styled.div`
  text-align: right;
  padding: 5px;
  padding-top: 20px;
`;

const CloseButton = styled.button`
  display: inline-block;
  text-align: right;
  padding: 7px 15px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
`;

interface RightButtonProps {
  background?: string;
  color?: string;
  border?: string;
  marginRight?: string;
  isEdit?: boolean;
}

const RightButton = styled.button<RightButtonProps>`
  margin-right: ${(props) => props.marginRight || '0'};
  border: ${(props) => props.border || 'none'};
  background: ${(props) => props.background || '#262d34'};
  border-radius: 8px;
  color: ${(props) => props.color || 'white'};
  padding: 7px 15px;
  cursor: pointer;
  position: relative;
  left: ${(props) => (props.isEdit ? '35%' : '55%')};
  @media ${device.mobileL} {
    left: ${(props) => (props.isEdit ? '25%' : '50%')};
  }
  @media ${device.mobileM} {
    left: ${(props) => (props.isEdit ? '10%' : '35%')};
  }
  @media ${device.mobileS} {
    left: ${(props) => (props.isEdit ? '7%' : '20%')};
  }
`;

const Avatar = styled.img`
  margin: auto;
  border-radius: 50%;
  height: 120px;
  object-fit: cover;
  object-position: center;
  width: 120px;
  padding: 15px;
`;

const GridProgressBar = styled.div`
  display: flex;
  vertical-align: middle;
  align-items: center;
`;

const ProgressBarContainer = styled.div`
  align-self: auto;
  background-color: #f0f4f3;
  width: 100%;
  border-radius: 10px;
  height: 1em;
`;

const ProgressBar = styled.div`
  background: linear-gradient(to right, #0abb87, #6fd466);
  border-radius: 10px;
  height: 1em;
`;

export {
  Modal,
  HeaderModal,
  ContentModal,
  FooterModal,
  CloseButton,
  Avatar,
  GridContainer,
  FlexContainer,
  FormContainer,
  GridProgressBar,
  ProgressBarContainer,
  ProgressBar,
  RightButton,
};
