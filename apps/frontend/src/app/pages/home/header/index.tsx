import { Container, SearchInput, Profile, Separator, Icon } from './styles';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { Logo } from '../../../components/Logo';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { VscBell } from 'react-icons/vsc';

interface Props {
  inputValue: string;
  handleSearch: (e: string) => void;
}

export function Header({ handleSearch, inputValue }: Props) {
  return (
    <Container>
      <Logo home={true} />
      <Separator>
        <AiOutlineSearch size={20} color="white" />
        <SearchInput
          placeholder="Buscar"
          value={inputValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Separator>
      <Icon>
        <HiOutlineEnvelope size={25} color="white" />
      </Icon>
      <Icon isLast>
        <VscBell size={25} color="white" />
      </Icon>
      <Profile>
        <AiOutlineUser size={30} color="white" />
      </Profile>
    </Container>
  );
}
