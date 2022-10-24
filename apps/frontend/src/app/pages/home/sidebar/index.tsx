import { ItemSidebar, SidebarContainer, SubMenu } from './styles';
import { VscGraphLine } from 'react-icons/vsc';
import { FaGraduationCap } from 'react-icons/fa';
import { FiBook } from 'react-icons/fi';
import { Span, Text } from '../../../components/styled';
import { useState } from 'react';

export function Sidebar() {
  const [currentTab, setCurrentTab] = useState<string>('academy');

  return (
    <SidebarContainer>
      <ItemSidebar>
        <VscGraphLine size={25} />
        <Span size="15" paddingLeft="15px" cursor="pointer">
          Dashboard
        </Span>
      </ItemSidebar>
      <ItemSidebar active={currentTab === 'academy'}>
        <FaGraduationCap size={25} />
        <Span
          size="15"
          paddingLeft="15px"
          weight={currentTab === 'academy' ? '600' : '400'}
          cursor="pointer"
        >
          Mi academia
        </Span>
      </ItemSidebar>
      <SubMenu>
        <Text size="13px" cursor="pointer">
          Editar Academia
        </Text>
        <Text size="13px" cursor="pointer">
          Estudiantes
        </Text>
        <Text size="13px" cursor="pointer">
          Profesores
        </Text>
      </SubMenu>
      <ItemSidebar>
        <FiBook size={25} />
        <Span size="15" paddingLeft="15px" cursor="pointer">
          Cursos
        </Span>
      </ItemSidebar>
    </SidebarContainer>
  );
}
