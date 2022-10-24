import styled from 'styled-components';
import { device } from '../../components/sizes';

const Form = styled.form`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  width: 50vh;
  @media ${device.mobileM} {
    padding: 20px;
    width: 60vh;
  }
  margin: 0 auto;
`;

const Grid = styled.div`
  height: 5vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 60px;
`;

const Left = styled.span`
  grid-column: 1 / 3;
  grid-row: 1;
  height: 1vh;
`;

const Right = styled.a`
  grid-column: 3 / 3;
  grid-row: 1;
  text-decoration: none;
  color: #9e9e9e;
  height: 1vh;
`;

interface LabelProps {
  size?: string;
  weight?: string;
}

const Label = styled.label<LabelProps>`
  font-style: Medium;
  font-size: ${(props) => props.size || '14px'};
  font-weight: ${(props) => props.weight || '400'};
  line-height: 22px;
  align-items: left;
  vertical-align: top;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 0.5em;
  border: 1px solid #dbdbdb;
  border-radius: 7px;
  padding: 10px;
  margin-bottom: 15px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Icon = styled.span`
  color: #9e9e9e;
  left: unset;
  right: 20px;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 55%;
  transform: translateY(-45%);
  cursor: pointer;
`;

export { Form, Grid, Left, Right, Label, InputWrapper, Input, Icon };
