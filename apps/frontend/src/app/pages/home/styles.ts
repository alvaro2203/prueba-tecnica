import styled from 'styled-components';
import { device } from '../../components/sizes';

const Container = styled.div`
  padding: 50px 40px 0 40px;
  display: grid;
  grid-template-columns: 10% 80%;
  @media ${device.laptop} {
    grid-gap: 1em;
    display: flex;
    flex-direction: column;
    border: none;
  }
`;

export { Container };
