import {
  Content,
  Table,
  Heading,
  Cell,
  Row,
  CellHeading,
  IsOnlineBox,
  PagButton,
  CustomButton,
} from './styles';
import { useState } from 'react';
import {
  AiOutlineInfoCircle,
  AiOutlineRight,
  AiOutlineLeft,
  AiOutlinePlusCircle,
} from 'react-icons/ai';

import { Text, Span } from '../../../components/styled';
import { User } from '../../../models/user';
import { InfoModal } from './modals/infoModal';
import { EditModal } from './modals/editModal';
import { CoursesModal } from './modals/coursesModal';
import { filter } from 'rxjs';

interface Props {
  filteredUsers: User[];
  loadingUsers: boolean;
}

export function UsersTable({ filteredUsers, loadingUsers }: Props) {
  const [actualPage, setActualPage] = useState<number>(1);
  const [isOpenInfoModal, setIsOpenInfoModal] = useState<boolean>(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [isOpenCoursesModal, setIsOpenCoursesModal] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<User>();

  const HeadingItems = [
    'Conexión',
    'Nombre y apellidos',
    'Nombre de usuario',
    'Email',
    'Móvil',
    '',
  ];

  const openUser = (userId: string) => {
    const user = filteredUsers.find((user) => user._id === userId);
    setCurrentUser(user);
    setIsOpenInfoModal(!isOpenInfoModal);
  };

  const toggleEditModal = () => {
    setIsOpenInfoModal(!isOpenInfoModal);
    setIsOpenEditModal(!isOpenEditModal);
  };

  const toggleTab = () => {
    if (activeModal) {
      setActiveModal(false);
      setIsOpenCoursesModal(true);
      setIsOpenInfoModal(false);
      setIsOpenEditModal(false);
    } else {
      setActiveModal(true);
      setIsOpenCoursesModal(false);
      setIsOpenInfoModal(true);
    }
  };

  const usersPerPage: number = 10;

  if (loadingUsers)
    return (
      <Text size="40px" weight="600" paddingTop="15px" paddingLeft="15px">
        Loading...
      </Text>
    );

  if (!filteredUsers.length)
    return (
      <Content>
        <Text size="20px" weight="600">
          No se han encontrado usuarios
        </Text>
      </Content>
    );

  return (
    <Content>
      <CustomButton>
        <AiOutlinePlusCircle size={25} />{' '}
        <Span color="white" paddingLeft="6px" cursor="pointer">
          Nuevo Estudiante
        </Span>
      </CustomButton>
      <Table>
        <Heading>
          <Row>
            {HeadingItems.map((item, i) => (
              <CellHeading key={i}>{item}</CellHeading>
            ))}
          </Row>
        </Heading>
        {filteredUsers
          .slice(
            usersPerPage * actualPage - usersPerPage,
            usersPerPage * actualPage
          )
          .map((user, i) => (
            <Row key={i}>
              <Cell>
                <IsOnlineBox>
                  {user.isOnline ? 'Online' : 'Offline'}
                </IsOnlineBox>
              </Cell>
              <Cell>{user.name + ' ' + user.lastName}</Cell>
              <Cell>{user.username}</Cell>
              <Cell>{user.email}</Cell>
              <Cell>{user.phone}</Cell>
              <Cell>
                <AiOutlineInfoCircle
                  style={{ cursor: 'pointer' }}
                  size={25}
                  onClick={() => openUser(user._id)}
                />
              </Cell>
            </Row>
          ))}
      </Table>
      <div style={{ marginBottom: '10px' }}>
        <PagButton
          disabled={actualPage === 1}
          onClick={() => setActualPage(actualPage - 1)}
        >
          <AiOutlineLeft />
        </PagButton>
        <span>{actualPage}</span>
        <PagButton
          onClick={() => setActualPage(actualPage + 1)}
          disabled={filteredUsers.length < 10}
        >
          <AiOutlineRight />
        </PagButton>
      </div>
      {isOpenInfoModal && (
        <InfoModal
          activeModal={activeModal}
          toggleTab={toggleTab}
          toggleEditModal={toggleEditModal}
          currentUser={currentUser}
          isOpenInfoModal={isOpenInfoModal}
          setIsOpenInfoModal={setIsOpenInfoModal}
        />
      )}
      {isOpenEditModal && (
        <EditModal
          filteredUsers={filteredUsers}
          activeModal={activeModal}
          toggleTab={toggleTab}
          toggleEditModal={toggleEditModal}
          currentUser={currentUser}
          isOpenEditModal={isOpenEditModal}
          setIsOpenEditModal={setIsOpenEditModal}
        />
      )}
      {isOpenCoursesModal && (
        <CoursesModal
          activeModal={activeModal}
          toggleTab={toggleTab}
          currentUser={currentUser}
          isOpenCoursesModal={isOpenCoursesModal}
          setIsOpenCoursesModal={setIsOpenCoursesModal}
          setActiveModal={setActiveModal}
        />
      )}
    </Content>
  );
}
