import styled from 'styled-components';
import { device } from '../../../components/sizes';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  background-color: #262d34;
  height: 10vh;
  width: 100%;
  background: #262d34;
  overflow: hidden;
`;

const Separator = styled.div`
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    padding-left: 30px;
  }
`;

const SearchInput = styled.input`
  ::placeholder {
    color: white;
    opacity: 90%;
  }
  outline: none;
  color: white;
  border: none;
  background: none;
  padding-left: 5px;
  padding-right: 54vw;
  @media ${device.tablet} {
    padding-right: 0;
  }
`;

const Section = styled.div`
  width: auto;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

interface IconProps {
  isLast?: boolean;
}

const Icon = styled.div<IconProps>`
  border-right: ${(props) => (props.isLast ? '1px solid #eff4f6' : 'none')};
  display: flex;
  align-items: center;
  padding-right: 30px;
  height: 6vh;
  @media ${device.tablet} {
    padding-right: 10px;
  }
`;

const Profile = styled.div`
  border: 1px solid white;
  border-radius: 50%;
  padding: 8px 10px;
  color: white;
  font-size: 25px;
  border: 1px solid white;
  border-radius: 100%;
  margin-left: 25px;
  margin-right: 25px;
  @media ${device.tablet} {
    margin-left: 10px;
    margin-right: 0;
  }
  cursor: pointer;
  padding: 8px 10px;
`;

export { Container, SearchInput, Icon, Profile, Section, Separator };
